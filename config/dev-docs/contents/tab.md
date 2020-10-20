### Tab

| 参数                  | 说明                                                                                                                                                                                                                  | 类型            | 默认值      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| activeKey           | 被激活的选项卡的 key, 赋值则tab为受控组件, 用户无法切换                                                                                                                                                                                   | Number/String | -        |
| size                | 尺寸<br/><br/>**可选值**:<br/>'small', 'medium'                                                                                                                                                                             | Enum          | 'medium' |
| shape               | 外观形态<br/><br/>**可选值**:<br/>'pure', 'wrapped', 'text', 'capsule'                                                                                                                                                        | Enum          | 'pure'   |
| defaultActiveKey    | 初始化时被激活的选项卡的 key                                                                                                                                                                                                    | Number/String | -        |
| animation           | 是否开启动效                                                                                                                                                                                                              | Boolean       | true     |
| excessMode          | 选项卡过多时的滑动模式<br/><br/>**可选值**:<br/>'slide', 'dropdown'                                                                                                                                                                  | Enum          | 'slide'  |
| tabPosition         | 导航选项卡的位置，只适用于包裹型（wrapped）选项卡<br/><br/>**可选值**:<br/>'top', 'bottom', 'left', 'right'                                                                                                                                    | Enum          | 'top'    |
| triggerType         | 激活选项卡的触发方式<br/><br/>**可选值**:<br/>'hover', 'click'                                                                                                                                                                      | Enum          | 'click'  |
| lazyLoad            | 是否延迟加载 TabPane 的内容, 默认开启, 即不提前渲染                                                                                                                                                                                    | Boolean       | true     |
| unmountInactiveTabs | 是否自动卸载未处于激活状态的选项卡                                                                                                                                                                                                   | Boolean       | false    |
| navStyle            | 导航条的自定义样式                                                                                                                                                                                                           | Object        | -        |
| navClassName        | 导航条的自定义样式类                                                                                                                                                                                                          | String        | -        |
| contentStyle        | 内容区容器的自定义样式                                                                                                                                                                                                         | Object        | -        |
| contentClassName    | 内容区容器的自定义样式类                                                                                                                                                                                                        | String        | -        |
| extra               | 导航栏附加内容                                                                                                                                                                                                             | ReactNode     | -        |
| disableKeyboard     | 禁止键盘事件，设置后无法通过键盘的上下左右按键，切换当前选中的tab                                                                                                                                                                                  | Boolean       | false    |
| onClick             | 点击单个选项卡时触发的回调<br/><br/>**签名**:<br/>Function() => void                                                                                                                                                                  | Function      | () => {} |
| onChange            | 选项卡发生切换时的事件回调<br/><br/>**签名**:<br/>Function(key: String/Number) => void<br/>**参数**:<br/>*key*: {String/Number} 改变后的 key                                                                                                  | Function      | () => {} |
| onClose             | 选项卡被关闭时的事件回调<br/><br/>**签名**:<br/>Function(key: String/Number) => void<br/>**参数**:<br/>*key*: {String/Number} 关闭的选项卡的 key                                                                                                | Function      | () => {} |
| tabRender           | 自定义选项卡模板渲染函数<br/><br/>**签名**:<br/>Function(key: String, props: Object) => ReactNode<br/>**参数**:<br/>*key*: {String} 当前 Tab.Item 的 key 值<br/>*props*: {Object} 传给 Tab.Item 的所有属性键值对<br/>**返回值**:<br/>{ReactNode} 返回自定义组件<br/> | Function      | -        |
| popupProps          | 弹层属性透传, 只有当 excessMode 为 dropdown 时生效                                                                                                                                                                               | Object        | -        |
| icons               | 自定义组件内 icon                                                                                                                                                                                                         | Object        | {}       |

### Tab.Item

| 参数        | 说明         | 类型        | 默认值   |
| --------- | ---------- | --------- | ----- |
| title     | 选项卡标题      | ReactNode | -     |
| closeable | 单个选项卡是否可关闭 | Boolean   | false |
| disabled  | 选项卡是否被禁用   | Boolean   | -     |
