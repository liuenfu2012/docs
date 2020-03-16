# Setup

It only takes a few minutes to install the SS CMS command line tool and get ready.

## 1. Download the SS CMS CLI

Go to the SS CMS [product download page](https://www.siteserver.cn/cms/), find the SS CMS CLI, and click the Download button.

The downloaded file is an executable file(siteserver.exe).

## 2. Run the SS CMS CLI

siteserver.exe needs to be executed from the command line. You can use command line tools such as cmd command, Windows PowerShell or bash shell. The following describes how to run the command line through cmd.

Open the Run pop-up box in Windows and type the cmd command:

![](/assets/setup/01.png)

Or find cmd.exe from the start menu:

![](/assets/setup/02.jpg)

File into the command line interface to enter the folder where siteserver.exe, and then enter the `siteserver.exe version` command, the screen will display the version information:

``` sh
C:\Windows\system32> siteserver version
欢迎使用 SS CMS CLI 命令行工具

SS CMS CLI 版本号: 6.9.0
当前文件夹: C:\Windows\system32
```

Now you can start backing up, restoring, upgrading, and more with the SS CMS CLI command line.

## 3. Set environment variables

If you want to run siteserver.exe in any folder, you can do so by setting the Windows environment variable, which is our recommended usage to run SS CMS commands anytime, anywhere.

First right click on my computer, select Properties in the pop-up menu, pop-up system interface, click Advanced System Settings in the system interface, pop-up advanced tab:

![](/assets/setup/04.png)

Click the environment variable button, edit the Path variable in the pop-up dialog box, and add the folder address where the siteserver.exe file is located:

![](/assets/setup/05.png)

Click OK and re-open the command line interface to run the siteserver command in any folder.