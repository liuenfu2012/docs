# Overview

In general, to deploy SS CMS to a hosting environment:

* Deploy the downloaded SS CMS files to a folder on the hosting server.
* Set up a process manager and reverse proxy.

## Publish to a folder

A .NET Core app can be published as self-contained deployment or framework-dependent deployment. SS CMS is self-contained, the assembly files that contain the .NET runtime are included in the publish folder.

## Set up a process manager and reverse proxy

SS CMS is a console app that must be started when a server boots and restarted if it crashes.

The reverse proxy server receives HTTP requests from the network and forwards them to the SS CMS.

SS CMS communicates directly with the Internet without using a reverse proxy server:

![SS CMS communicates directly with the Internet](/docs/guide/images/getting-started/host-and-deploy/sscms-to-internet.png)

SS CMS communicates indirectly with the Internet through a reverse proxy server such as IIS, Nginx, or Apache:

![SS CMS communicates indirectly with the Internet](/docs/guide/images/getting-started/host-and-deploy/sscms-to-proxy-to-internet.png)

With a reverse proxy, you also get the following benefits:

* Can limit the exposed public surface area of the apps that it hosts.
* Provide an additional layer of configuration and defense.
* Might integrate better with existing infrastructure.
* Simplify load balancing and secure communication (HTTPS) configuration. Only the reverse proxy server requires an X.509 certificate, and that server can communicate with the app's servers on the internal network using plain HTTP.

::: warning NOTE
A reverse proxy is required to deploy SS CMS in a formal environment.
:::

 To automate starts and restarts, a process manager and reverse proxy is required. The most common process managers for ASP.NET Core are:

* Linux
  * [Nginx](./deploy-linux-nginx.html)
  * [Apache](./deploy-linux-apache.html)
* Windows
  * [IIS](./deploy-windows-iis.html)