# Host SS CMS on Linux with Apache

Using this guide, learn how to set up [Apache](https://httpd.apache.org/) as a reverse proxy server on [CentOS 7](https://www.centos.org/) to redirect HTTP traffic to SS CMS.

## Install Apache

Update CentOS packages to their latest stable versions:

```bash
sudo yum update -y
```

Install the Apache web server on CentOS with a single `yum` command:

```bash
sudo yum -y install httpd mod_ssl
```

Sample output after running the command:

```bash
Downloading packages:
httpd-2.4.6-40.el7.centos.4.x86_64.rpm               | 2.7 MB  00:00:01
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
Installing : httpd-2.4.6-40.el7.centos.4.x86_64      1/1 
Verifying  : httpd-2.4.6-40.el7.centos.4.x86_64      1/1 

Installed:
httpd.x86_64 0:2.4.6-40.el7.centos.4

Complete!
```

::: warning NOTE
In this example, the output reflects httpd.86_64 since the CentOS 7 version is 64 bit. To verify where Apache is installed, run `whereis httpd` from a command prompt.
:::

## Configure Apache

Configuration files for Apache are located within the `/etc/httpd/conf.d/` directory. Any file with the .conf extension is processed in alphabetical order in addition to the module configuration files in `/etc/httpd/conf.modules.d/`, which contains any configuration files necessary to load modules.

Create a configuration file, named sscms.conf, for the app:

```
<VirtualHost *:*>
    RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
</VirtualHost>

<VirtualHost *:80>
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5000/
    ServerName www.example.com
    ServerAlias *.example.com
    ErrorLog ${APACHE_LOG_DIR}sscms-error.log
    CustomLog ${APACHE_LOG_DIR}sscms-access.log common
</VirtualHost>
```

The `VirtualHost` block can appear multiple times, in one or more files on a server. In the preceding configuration file, Apache accepts public traffic on port 80. The domain `www.example.com` is being served, and the `*.example.com` alias resolves to the same website. See N[ame-based virtual host](https://httpd.apache.org/docs/current/vhosts/name-based.html) support for more information. Requests are proxied at the root to port 5000 of the server at 127.0.0.1. For bi-directional communication, `ProxyPass` and `ProxyPassReverse` are required.

::: warning NOTE
Failure to specify a proper [ServerName directive](https://httpd.apache.org/docs/current/mod/core.html#servername) in the VirtualHost block exposes your app to security vulnerabilities. Subdomain wildcard binding (for example, `*.example.com`) doesn't pose this security risk if you control the entire parent domain (as opposed to *.com, which is vulnerable). See [rfc7230 section-5.4](https://tools.ietf.org/html/rfc7230#section-5.4) for more information.
:::

Logging can be configured per `VirtualHost` using `ErrorLog` and `CustomLog` directives. ErrorLog is the location where the server logs errors, and `CustomLog` sets the filename and format of log file. In this case, this is where request information is logged. There's one line for each request.

Save the file and test the configuration. If everything passes, the response should be `Syntax [OK]`.

```bash
sudo service httpd configtest
```

Restart Apache:

```bash
sudo systemctl restart httpd
sudo systemctl enable httpd
```

## Monitor SS CMS

Apache is now setup to forward requests made to `http://localhost:80` to the ASP.NET Core app running on SS CMS at `http://127.0.0.1:5000`. However, Apache isn't set up to manage the SS CMS process. Use systemd and create a service file to start and monitor the underlying web app. systemd is an init system that provides many powerful features for starting, stopping, and managing processes.

### Create the service file

Create the service definition file:

```bash
sudo nano /etc/systemd/system/sscms.service
```

An example service file for the app:

```
[Unit]
Description=Example SS CMS App running on CentOS 7

[Service]
WorkingDirectory=/var/www
ExecStart=/var/www/sscms
Restart=always
# Restart service after 10 seconds if the sscms service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=sscms-example
User=apache

[Install]
WantedBy=multi-user.target
```

In the preceding example, the user that manages the service is specified by the `User` option. The user (`apache`) must exist and have proper ownership of the app's files.

Use `TimeoutStopSec` to configure the duration of time to wait for the app to shut down after it receives the initial interrupt signal. If the app doesn't shut down in this period, SIGKILL is issued to terminate the app. Provide the value as unitless seconds (for example, `150`), a time span value (for example, `2min 30s`), or `infinity` to disable the timeout. `TimeoutStopSec` defaults to the value of `DefaultTimeoutStopSec` in the manager configuration file (systemd-system.conf, system.conf.d, systemd-user.conf, user.conf.d). The default timeout for most distributions is 90 seconds.

```
# The default value is 90 seconds for most distributions.
TimeoutStopSec=90
```

Save the file and enable the service:

```bash
sudo systemctl enable sscms.service
```

Start the service and verify that it's running:

```bash
sudo systemctl start sscms.service
sudo systemctl status sscms.service

● sscms.service - Example SS CMS App running on CentOS 7
    Loaded: loaded (/etc/systemd/system/sscms.service; enabled)
    Active: active (running) since Thu 2016-10-18 04:09:35 NZDT; 35s ago
Main PID: 9021 (dotnet)
    CGroup: /system.slice/sscms.service
            └─9021 /var/www/sscms
```

With the reverse proxy configured and Kestrel managed through systemd, the web app is fully configured and can be accessed from a browser on the local machine at `http://localhost`. Inspecting the response headers, the Server header indicates that the ASP.NET Core app is served by Kestrel:

```
HTTP/1.1 200 OK
Date: Tue, 11 Oct 2016 16:22:23 GMT
Server: Kestrel
Keep-Alive: timeout=5, max=98
Connection: Keep-Alive
Transfer-Encoding: chunked
```

### View logs

Since SS CMS is managed using systemd, events and processes are logged to a centralized journal. However, this journal includes entries for all of the services and processes managed by systemd. To view the `sscms.service`-specific items, use the following command:

```bash
sudo journalctl -fu sscms.service
```

For time filtering, specify time options with the command. For example, use `--since today` to filter for the current day or `--until 1 hour ago` to see the previous hour's entries. For more information, see the [man page for journalctl](https://www.unix.com/man-page/centos/1/journalctl/).

```bash
sudo journalctl -fu sscms.service --since "2016-10-18" --until "2016-10-18 04:00"
```

## Secure SS CMS

### Configure firewall

Firewalld is a dynamic daemon to manage the firewall with support for network zones. Ports and packet filtering can still be managed by iptables. Firewalld should be installed by default. `yum` can be used to install the package or verify it's installed.

```bash
sudo yum install firewalld -y
```

Use `firewalld` to open only the ports needed for the app. In this case, port 80 and 443 are used. The following commands permanently set ports 80 and 443 to open:

```bash
sudo firewall-cmd --add-port=80/tcp --permanent
sudo firewall-cmd --add-port=443/tcp --permanent
```

Reload the firewall settings. Check the available services and ports in the default zone. Options are available by inspecting `firewall-cmd -h.`

```bash
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

```bash
public (default, active)
interfaces: eth0
sources: 
services: dhcpv6-client
ports: 443/tcp 80/tcp
masquerade: no
forward-ports: 
icmp-blocks: 
rich rules: 
```

### HTTPS configuration

Configure the reverse proxy for secure (HTTPS) client connections

To configure Apache for HTTPS, the mod_ssl module is used. When the httpd module was installed, the mod_ssl module was also installed. If it wasn't installed, use `yum` to add it to the configuration.

```bash
sudo yum install mod_ssl
```

To enforce HTTPS, install the `mod_rewrite` module to enable URL rewriting:

```bash
sudo yum install mod_rewrite
```

Modify the sscms.conf file to enable URL rewriting and secure communication on port 443:

```
<VirtualHost *:*>
    RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
</VirtualHost>

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</VirtualHost>

<VirtualHost *:443>
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5000/
    ErrorLog /var/log/httpd/sscms-error.log
    CustomLog /var/log/httpd/sscms-access.log common
    SSLEngine on
    SSLProtocol all -SSLv2
    SSLCipherSuite ALL:!ADH:!EXPORT:!SSLv2:!RC4+RSA:+HIGH:+MEDIUM:!LOW:!RC4
    SSLCertificateFile /etc/pki/tls/certs/localhost.crt
    SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
</VirtualHost>
```

::: warning NOTE
This example is using a locally-generated certificate. SSLCertificateFile should be the primary certificate file for the domain name. SSLCertificateKeyFile should be the key file generated when CSR is created. SSLCertificateChainFile should be the intermediate certificate file (if any) that was supplied by the certificate authority.
:::

Save the file and test the configuration:

```bash
sudo service httpd configtest
```

Restart Apache:

```bash
sudo systemctl restart httpd
```

## Additional Apache suggestions

### Additional headers

In order to secure against malicious attacks, there are a few headers that should either be modified or added. Ensure that the `mod_headers` module is installed:

```bash
sudo yum install mod_headers
```

#### Secure Apache from clickjacking attacks

[Clickjacking](https://blog.qualys.com/securitylabs/2015/10/20/clickjacking-a-common-implementation-mistake-that-can-put-your-websites-in-danger), also known as a UI redress attack, is a malicious attack where a website visitor is tricked into clicking a link or button on a different page than they're currently visiting. Use `X-FRAME-OPTIONS` to secure the site.

To mitigate clickjacking attacks:

1. Edit the httpd.conf file:

   ```bash
   sudo nano /etc/httpd/conf/httpd.conf
   ```

   Add the line `Header append X-FRAME-OPTIONS "SAMEORIGIN"`.

1. Save the file.

1. Restart Apache.

#### MIME-type sniffing

The `X-Content-Type-Options` header prevents Internet Explorer from MIME-sniffing (determining a file's `Content-Type` from the file's content). If the server sets the `Content-Type` header to `text/html` with the `nosniff` option set, Internet Explorer renders the content as `text/html` regardless of the file's content.

Edit the httpd.conf file:

```bash
sudo nano /etc/httpd/conf/httpd.conf
```

Add the line `Header set X-Content-Type-Options "nosniff"`. Save the file. Restart Apache.

### Load Balancing

This example shows how to setup and configure Apache on CentOS 7 and Kestrel on the same instance machine. In order to not have a single point of failure; using mod_proxy_balancer and modifying the VirtualHost would allow for managing multiple instances of the web apps behind the Apache proxy server.

```bash
sudo yum install mod_proxy_balancer
```

In the configuration file shown below, an additional instance of the `sscms` is set up to run on port 5001. The Proxy section is set with a balancer configuration with two members to load balance byrequests.

```
<VirtualHost *:*>
    RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
</VirtualHost>

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</VirtualHost>

<VirtualHost *:443>
    ProxyPass / balancer://mycluster/ 

    ProxyPassReverse / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5001/

    <Proxy balancer://mycluster>
        BalancerMember http://127.0.0.1:5000
        BalancerMember http://127.0.0.1:5001 
        ProxySet lbmethod=byrequests
    </Proxy>

    <Location />
        SetHandler balancer
    </Location>
    ErrorLog /var/log/httpd/sscms-error.log
    CustomLog /var/log/httpd/sscms-access.log common
    SSLEngine on
    SSLProtocol all -SSLv2
    SSLCipherSuite ALL:!ADH:!EXPORT:!SSLv2:!RC4+RSA:+HIGH:+MEDIUM:!LOW:!RC4
    SSLCertificateFile /etc/pki/tls/certs/localhost.crt
    SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
</VirtualHost>
```

### Rate Limits

Using mod_ratelimit, which is included in the httpd module, the bandwidth of clients can be limited:

```bash
sudo nano /etc/httpd/conf.d/ratelimit.conf
```

The example file limits bandwidth as 600 KB/sec under the root location:

```
<IfModule mod_ratelimit.c>
    <Location />
        SetOutputFilter RATE_LIMIT
        SetEnv rate-limit 600
    </Location>
</IfModule>
```

### Long request header fields

Proxy server default settings typically limit request header fields to 8,190 bytes. If longer fields are required, the proxy server's [LimitRequestFieldSize](https://httpd.apache.org/docs/2.4/mod/core.html#LimitRequestFieldSize) directive requires adjustment. The value to apply depends on the scenario. For more information, see your server's documentation.

::: warning NOTE
Don't increase the default value of `LimitRequestFieldSize` unless necessary. Increasing the value increases the risk of buffer overrun (overflow) and Denial of Service (DoS) attacks by malicious users.
:::
