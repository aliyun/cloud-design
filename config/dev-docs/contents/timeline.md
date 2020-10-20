### Timeline

| 参数   | 说明                                                                  | 类型    | 默认值 |
| ---- | ------------------------------------------------------------------- | ----- | --- |
| fold | 自定义折叠选项 示例`[{foldArea: [startIndex, endIndex], foldShow: boolean}]` | Array | \[] |

### Timeline.Item

| 参数        | 说明                                                            | 类型        | 默认值    |
| --------- | ------------------------------------------------------------- | --------- | ------ |
| state     | 节点状态<br/><br/>**可选值**:<br/>'done', 'process', 'error', 'success' | Enum      | 'done' |
| icon      | 图标                                                            | String    | -      |
| dot       | 自定义时间轴节点                                                      | ReactNode | -      |
| time      | 格式化后的时间                                                       | ReactNode | -      |
| title     | 标题                                                            | ReactNode | -      |
| timeLeft  | 左侧时间                                                          | ReactNode | -      |
| content   | 右侧内容                                                          | ReactNode | -      |
| animation | 动画                                                            | Boolean   | true   |
