### 问题

系统报错：

CS0016: Could not write to output file 'C:\Windows\Microsoft.NET\Framework\v4.0.30319\TemporaryASP.NET Files\root\9218c35c\1d16c6e1\29631bad.galqkak3.dll' -- '拒绝访问。 

### 答案

给以下两个目录添加NETWORK SERVICE用户以及IIS_IUSRS用户所有权限：
- C:\Windows\Microsoft.NET\Microsoft.NET\Framework\v4.0.30319\Temporary ASP.NET Files
- C:\Windows\Temp

比较隐晦的是在提示信息中只提示到了Temporary ASP.NET Files文件夹，给该文件夹加权限并不能解决问题，只有给C:\Windows\Temp也增加权限才行。

出现此问题的可能原因：

用第三方临时文件清除工具后，可能会删除掉C:\Windows\Temp，造成失去了相应权限。