### Switch

| 参数                | 说明                                                                                                                                             | 类型       | 默认值      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| checkedChildren   | 打开时的内容                                                                                                                                         | any      | -        |
| size              | switch的尺寸<br/><br/>**可选值**:<br/>'medium'(正常大小)<br/>'small'(缩小版大小)                                                                                  | Enum     | 'medium' |
| unCheckedChildren | 关闭时的内容                                                                                                                                         | any      | -        |
| onChange          | 开关状态改变是触发此事件<br/><br/>**签名**:<br/>Function(checked: Boolean, e: Event) => void<br/>**参数**:<br/>*checked*: {Boolean} 是否为打开状态<br/>*e*: {Event} DOM事件对象 | Function | () => {} |
| checked           | 开关当前的值(针对受控组件)                                                                                                                                 | Boolean  | -        |
| defaultChecked    | 开关默认值 (针对非受控组件)                                                                                                                                | Boolean  | false    |
| disabled          | 表示开关被禁用                                                                                                                                        | Boolean  | false    |
| onClick           | 鼠标点击事件<br/><br/>**签名**:<br/>Function(e: Event) => void<br/>**参数**:<br/>*e*: {Event} DOM事件对象                                                         | Function | -        |
| onKeyDown         | 键盘按键事件<br/><br/>**签名**:<br/>Function(e: Event) => void<br/>**参数**:<br/>*e*: {Event} DOM事件对象                                                         | Function | -        |
| isPreview         | 是否为预览态                                                                                                                                         | Boolean  | false    |
| renderPreview     | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>Function(value: number) => void<br/>**参数**:<br/>*value*: {number} 评分值                                              | Function | -        |
