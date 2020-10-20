### Card

| 参数              | 说明                                                           | 类型            | 默认值   |
| --------------- | ------------------------------------------------------------ | ------------- | ----- |
| media           | 卡片的上的图片 / 视频                                                 | ReactNode     | -     |
| title           | 卡片的标题                                                        | ReactNode     | -     |
| subTitle        | 卡片的副标题                                                       | ReactNode     | -     |
| actions         | 卡片操作组，位置在卡片底部                                                | ReactNode     | -     |
| showTitleBullet | 是否显示标题的项目符号                                                  | Boolean       | true  |
| showHeadDivider | 是否展示头部的分隔线                                                   | Boolean       | true  |
| contentHeight   | 内容区域的固定高度                                                    | String/Number | 120   |
| extra           | 标题区域的用户自定义内容                                                 | ReactNode     | -     |
| free            | 是否开启自由模式，开启后card 将使用子组件配合使用, 设置此项后 title, subtitle, 等等属性都将失效 | Boolean       | false |

### Card.Media

| 参数        | 说明      | 类型     | 默认值   |
| --------- | ------- | ------ | ----- |
| component | 设置标签类型  | custom | 'div' |
| image     | 背景图片地址  | String | -     |
| src       | 媒体源文件地址 | String | -     |

### Card.Header

| 参数        | 说明           | 类型        | 默认值   |
| --------- | ------------ | --------- | ----- |
| title     | 卡片的标题        | ReactNode | -     |
| subTitle  | 卡片的副标题       | ReactNode | -     |
| extra     | 标题区域的用户自定义内容 | ReactNode | -     |
| component | 设置标签类型       | custom    | 'div' |

### Card.Content

| 参数        | 说明     | 类型     | 默认值   |
| --------- | ------ | ------ | ----- |
| component | 设置标签类型 | custom | 'div' |

### Card.Divider

| 参数        | 说明        | 类型      | 默认值  |
| --------- | --------- | ------- | ---- |
| component | 设置标签类型    | custom  | 'hr' |
| inset     | 分割线是否向内缩进 | Boolean | -    |

### Card.Actions

| 参数        | 说明     | 类型     | 默认值   |
| --------- | ------ | ------ | ----- |
| component | 设置标签类型 | custom | 'div' |
