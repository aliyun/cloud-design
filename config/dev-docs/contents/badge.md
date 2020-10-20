### Badge

| 参数            | 说明                                                      | 类型            | 默认值   |
| ------------- | ------------------------------------------------------- | ------------- | ----- |
| children      | 徽章依托的内容                                                 | ReactNode     | -     |
| count         | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时默认隐藏 | Number/String | 0     |
| showZero      | 当count为0时，是否显示count                                     | Boolean       | false |
| content       | 自定义节点内容                                                 | ReactNode     | -     |
| overflowCount | 展示的封顶的数字                                                | Number/String | 99    |
| dot           | 不展示数字，只展示一个小红点                                          | Boolean       | false |
