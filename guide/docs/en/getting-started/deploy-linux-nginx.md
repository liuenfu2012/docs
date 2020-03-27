# Host SS CMS on Linux with Nginx

This guide explains setting up a production-ready SS CMS environment on an Ubuntu 16.04 server.

## Install Nginx

Use apt-get to install Nginx. The installer creates a systemd init script that runs Nginx as daemon on system startup. Follow the installation instructions for Ubuntu at: [Nginx: Official Debian/Ubuntu packages](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/#official-debian-ubuntu-packages)。

```bash
sudo apt-get update
sudo apt-get install nginx
```

Since Nginx was installed for the first time, explicitly start it by running:

```bash
sudo service nginx start
```

Verify a browser displays the default landing page for Nginx. The landing page is reachable at `http://<server_IP_address>/index.nginx-debian.html`.

## Configure Nginx

To configure Nginx as a reverse proxy to forward requests to your ASP.NET Core app, modify /etc/nginx/sites-available/default. Open it in a text editor, and replace the contents with the following:

```nginx
server {
    listen        80;
    server_name   example.com *.example.com;
    location / {
        proxy_pass         http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

When no `server_name` matches, Nginx uses the default server. If no default server is defined, the first server in the configuration file is the default server. As a best practice, add a specific default server which returns a status code of 444 in your configuration file. A default server configuration example is:

```nginx
server {
    listen   80 default_server;
    # listen [::]:80 default_server deferred;
    return   444;
}
```

With the preceding configuration file and default server, Nginx accepts public traffic on port 80 with host header example.com or *.example.com. Requests not matching these hosts won't get forwarded to SS CMS. Nginx forwards the matching requests to SS CMS at http://localhost:5000.

::: warning NOTE
ailure to specify a proper [server_name directive](https://nginx.org/docs/http/server_names.html) exposes your app to security vulnerabilities. Subdomain wildcard binding (for example, *.example.com) doesn't pose this security risk if you control the entire parent domain (as opposed to *.com, which is vulnerable). See [rfc7230 section-5.4](https://tools.ietf.org/html/rfc7230#section-5.4) for more information.
:::

Once the Nginx configuration is established, run `sudo nginx -t` to verify the syntax of the configuration files. If the configuration file test is successful, force Nginx to pick up the changes by running `sudo nginx -s reload`.

## Monitor SS CMS

The server is setup to forward requests made to `http://<serveraddress>:80` on to the ASP.NET Core app running on SS CMS at `http://127.0.0.1:5000`. However, Nginx isn't set up to manage the SS CMS process. systemd can be used to create a service file to start and monitor the underlying web app. systemd is an init system that provides many powerful features for starting, stopping, and managing processes.

### Create the service file

Create the service definition file:

```bash
sudo nano /etc/systemd/system/sscms.service
```

The following is an example service file for the app:

```ini
[Unit]
Description=Example SS CMS App running on Linux

[Service]
WorkingDirectory=/var/www
ExecStart=/var/www/sscms
Restart=always
# Restart service after 10 seconds if the sscms service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=sscms-example
User=www-data

[Install]
WantedBy=multi-user.target
```

In the preceding example, the user that manages the service is specified by the User option. The user (`www-data`) must exist and have proper ownership of the app's files.

Use `TimeoutStopSec` to configure the duration of time to wait for the app to shut down after it receives the initial interrupt signal. If the app doesn't shut down in this period, SIGKILL is issued to terminate the app. Provide the value as unitless seconds (for example, 150), a time span value (for example, `2min 30s`), or `infinity` to disable the timeout. `TimeoutStopSec` defaults to the value of `DefaultTimeoutStopSec` in the manager configuration file (systemd-system.conf, system.conf.d, systemd-user.conf, user.conf.d). The default timeout for most distributions is 90 seconds.

```
# The default value is 90 seconds for most distributions.
TimeoutStopSec=90
```

Save the file and enable the service.

```bash
sudo systemctl enable sscms.service
```

Start the service and verify that it's running.

```
sudo systemctl start sscms.service
sudo systemctl status sscms.service

● sscms.service - Example SS CMS App running on Linux
    Loaded: loaded (/etc/systemd/system/sscms.service; enabled)
    Active: active (running) since Thu 2016-10-18 04:09:35 NZDT; 35s ago
Main PID: 9021 (dotnet)
    CGroup: /system.slice/sscms.service
            └─9021 /var/www/sscms
```

With the reverse proxy configured and SS CMS managed through systemd, the web app is fully configured and can be accessed from a browser on the local machine at `http://localhost`. It's also accessible from a remote machine, barring any firewall that might be blocking. Inspecting the response headers, the `Server` header shows SS CMS being served by SS CMS.

```
HTTP/1.1 200 OK
Date: Tue, 11 Oct 2016 16:22:23 GMT
Server: Kestrel
Keep-Alive: timeout=5, max=98
Connection: Keep-Alive
Transfer-Encoding: chunked
```

### View logs

Since the web app using Kestrel is managed using `systemd`, all events and processes are logged to a centralized journal. However, this journal includes all entries for all services and processes managed by `systemd`. To view the sscms.service-specific items, use the following command:

```bash
sudo journalctl -fu sscms.service
```

For further filtering, time options such as `--since today`, `--until 1 hour ago` or a combination of these can reduce the amount of entries returned.

```bash
sudo journalctl -fu sscms.service --since "2016-10-18" --until "2016-10-18 04:00"
```

## Secure SS CMS

### Enable AppArmor

Linux Security Modules (LSM) is a framework that's part of the Linux kernel since Linux 2.6. LSM supports different implementations of security modules. [AppArmor](https://wiki.ubuntu.com/AppArmor) is a LSM that implements a Mandatory Access Control system which allows confining the program to a limited set of resources. Ensure AppArmor is enabled and properly configured.

### Configure the firewall

Close off all external ports that are not in use. Uncomplicated firewall (ufw) provides a front end for `iptables` by providing a CLI for configuring the firewall.

::: warning NOTE
A firewall will prevent access to the whole system if not configured correctly. Failure to specify the correct SSH port will effectively lock you out of the system if you are using SSH to connect to it. The default port is 22. For more information, see the introduction to [ufw](https://help.ubuntu.com/community/UFW) and the [manual](https://manpages.ubuntu.com/manpages/bionic/man8/ufw.8.html).
:::

Install `ufw` and configure it to allow traffic on any ports needed.

```bash
sudo apt-get install ufw

sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

sudo ufw enable
```

### Secure Nginx

#### Change the Nginx response name

Edit src/http/ngx_http_header_filter_module.c：

```
static char ngx_http_server_string[] = "Server: Web Server" CRLF;
static char ngx_http_server_full_string[] = "Server: Web Server" CRLF;
```

#### Configure options

Configure the server with additional required modules. Consider using a web app firewall, such as [ModSecurity](https://www.modsecurity.org/), to harden the app.

#### Secure Nginx from clickjacking

[Clickjacking](https://blog.qualys.com/securitylabs/2015/10/20/clickjacking-a-common-implementation-mistake-that-can-put-your-websites-in-danger), also known as a UI redress attack, is a malicious attack where a website visitor is tricked into clicking a link or button on a different page than they're currently visiting. Use `X-FRAME-OPTIONS` to secure the site.

To mitigate clickjacking attacks:

1. Edit the nginx.conf file:

   ```bash
   sudo nano /etc/nginx/nginx.conf
   ```

   Add the line `add_header X-Frame-Options "SAMEORIGIN"`;.

1. Save the file.

1. Restart Nginx.

#### MIME-type sniffing

This header prevents most browsers from MIME-sniffing a response away from the declared content type, as the header instructs the browser not to override the response content type. With the `nosniff` option, if the server says the content is "text/html", the browser renders it as "text/html".

Edit the nginx.conf file:

```bash
sudo nano /etc/nginx/nginx.conf
```

Add the line `add_header X-Content-Type-Options "nosniff";` and save the file, then restart Nginx.