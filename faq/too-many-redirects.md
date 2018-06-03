### 问题

如何解决重定向的次数过多的问题？

### 答案

修改web.config文件中 requestValidationMode 属性值。

```
<configuration> 
     <system.web>  
        <httpRuntime requestValidationMode="2.0" ****** />  
     </system.web> 
</configuration>
```