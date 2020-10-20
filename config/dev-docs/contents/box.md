### Box

| 参数        | 说明                                                                                                                              | 类型                             | 默认值    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------ |
| flex      | 布局属性                                                                                                                            | Array\<Number/String>/Number | -      |
| direction | 布局方向，默认为 column ，一个元素占据一整行<br/><br/>**可选值**:<br/>'row', 'column', 'row-reverse'                                                    | Enum                           | column |
| wrap      | 是否折行 支持IE11+                                                                                                                    | Boolean                        | false  |
| spacing   | 元素之间的间距 \[bottom\&top, right\&left]                                                                                                | Array\<Number>/Number        | -      |
| margin    | 设置 margin \[bottom\&top, right\&left]                                                                                              | Array\<Number>/Number        | -      |
| padding   | 设置 padding \[bottom\&top, right\&left]                                                                                             | Array\<Number>/Number        | -      |
| justify   | 沿着主轴方向，子元素们的排布关系 （兼容性同 justify-content ）<br/><br/>**可选值**:<br/>'flex-start', 'center', 'flex-end', 'space-between', 'space-around' | Enum                           | -      |
| align     | 垂直主轴方向，子元素们的排布关系 （兼容性同 align-items ）<br/><br/>**可选值**:<br/>'flex-start', 'center', 'flex-end', 'baseline', 'stretch'               | Enum                           | -      |
| component | 定制标签名， 例如section等                                                                                                               | String                         | 'div'  |
