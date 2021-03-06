# IJobContext interface

包含SiteServer Cli命令行执行任务时的上下文信息。

```csharp
public interface IJobContext
```

## Members

| name | description |
| --- | --- |
| [Args](IJobContext/Args.md) { get; } | 执行命令行时用户传递的参数。 |
| [Command](IJobContext/Command.md) { get; } | 当前所执行的命令。 |
| [FireTime](IJobContext/FireTime.md) { get; } | 任务的实际执行时间。 例如，计划的时间可能是10:00:00，但是如果调度程序太忙，实际的执行时间可能是10:00:03。 |
| [JobRunTime](IJobContext/JobRunTime.md) { get; } | 任务执行时间。 返回的值将一直到任务实际完成(或抛出异常)，因此通常只用于任务结束后获取。 |
| [NextFireTime](IJobContext/NextFireTime.md) { get; } | 任务下一次执行的时间。 |
| [PreviousFireTime](IJobContext/PreviousFireTime.md) { get; } | 任务上一次执行的时间。 |
| [ScheduledFireTime](IJobContext/ScheduledFireTime.md) { get; } | 任务的计划执行时间。 例如，计划的时间可能是10:00:00，但是如果调度程序太忙，实际的执行时间可能是10:00:03。 |

## See Also

* namespace [SiteServer.Plugin](../SiteServer.Plugin.md)

<!-- DO NOT EDIT: generated by xmldocmd for SiteServer.Plugin.dll -->
