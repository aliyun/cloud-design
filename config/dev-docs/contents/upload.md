### Upload

| 参数              | 说明                                                                                                                                                                                                                                              | 类型              | 默认值       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------- |
| action          | 上传的地址                                                                                                                                                                                                                                           | String          | -         |
| shape           | 上传按钮形状<br/><br/>**可选值**:<br/>'card'                                                                                                                                                                                                                | Enum            | -         |
| accept          | 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)                                                                                           | String          | -         |
| data            | 上传额外传参                                                                                                                                                                                                                                          | Object/Function | -         |
| headers         | 设置上传的请求头部                                                                                                                                                                                                                                       | Object          | -         |
| withCredentials | 是否允许请求携带 cookie                                                                                                                                                                                                                                 | Boolean         | true      |
| beforeUpload    | 可选参数, 详见 [beforeUpload](#beforeUpload)<br/><br/>**签名**:<br/>Function(file: Object, options: Object) => Boolean/Object/Promise<br/>**参数**:<br/>*file*: {Object} 所有文件<br/>*options*: {Object} 参数<br/>**返回值**:<br/>{Boolean/Object/Promise} 返回值作用见demo<br/> | Function        | func.noop |
| onProgress      | 上传中<br/><br/>**签名**:<br/>Function() => void                                                                                                                                                                                                        | Function        | func.noop |
| onSuccess       | 可选参数，上传成功回调函数，参数为请求下响应信息以及文件<br/><br/>**签名**:<br/>Function(file: Object, value: Array) => void<br/>**参数**:<br/>*file*: {Object} 文件<br/>*value*: {Array} 值                                                                                             | Function        | func.noop |
| onError         | 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件<br/><br/>**签名**:<br/>Function(file: Object, value: Array) => void<br/>**参数**:<br/>*file*: {Object} 出错的文件<br/>*value*: {Array} 当前值                                                                                   | Function        | func.noop |
| children        | 子元素                                                                                                                                                                                                                                             | ReactNode       | -         |
| timeout         | 设置上传超时,单位ms                                                                                                                                                                                                                                     | Number          | -         |
| method          | 上传方法<br/><br/>**可选值**:<br/>'post', 'put'                                                                                                                                                                                                           | Enum            | 'post'    |
| request         | 自定义上传方法<br/><br/>**签名**:<br/>Function(option: Object) => Object<br/>**参数**:<br/>*option*: {Object} null<br/>**返回值**:<br/>{Object} object with abort method<br/>                                                                                         | Function        | -         |
| name            | 文件名字段                                                                                                                                                                                                                                           | String          | -         |
| onSelect        | 选择文件回调<br/><br/>**签名**:<br/>Function() => void                                                                                                                                                                                                     | Function        | func.noop |
| onDrop          | 放文件<br/><br/>**签名**:<br/>Function() => void                                                                                                                                                                                                        | Function        | func.noop |
| value           | 文件列表                                                                                                                                                                                                                                            | Array           | -         |
| defaultValue    | 默认文件列表                                                                                                                                                                                                                                          | Array           | -         |
| listType        | 上传列表的样式<br/><br/>**可选值**:<br/>'text'(文字)<br/>'image'(图文)<br/>'card'(卡片)                                                                                                                                                                              | Enum            | -         |
| formatter       | 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)<br/><br/>**签名**:<br/>Function(response: Object, file: File) => void<br/>**参数**:<br/>*response*: {Object} 返回<br/>*file*: {File} 文件对象                                                     | Function        | -         |
| limit           | 最大文件上传个数                                                                                                                                                                                                                                        | Number          | Infinity  |
| dragable        | 可选参数，是否支持拖拽上传，`ie10+` 支持。                                                                                                                                                                                                                       | Boolean         | -         |
| useDataURL      | 可选参数，是否本地预览                                                                                                                                                                                                                                     | Boolean         | -         |
| disabled        | 可选参数，是否禁用上传功能                                                                                                                                                                                                                                   | Boolean         | -         |
| onChange        | 上传文件改变时的状态<br/><br/>**签名**:<br/>Function(info: Object) => void<br/>**参数**:<br/>*info*: {Object} 文件事件对象                                                                                                                                               | Function        | func.noop |
| afterSelect     | 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.<br/><br/>**签名**:<br/>Function(file: Object) => Boolean<br/>**参数**:<br/>*file*: {Object} null<br/>**返回值**:<br/>{Boolean} 返回false会阻止上传,其他则表示正常<br/>         | Function        | func.noop |
| onRemove        | 移除文件回调函数<br/><br/>**签名**:<br/>Function(file: Object) => Boolean/Promise<br/>**参数**:<br/>*file*: {Object} 文件<br/>**返回值**:<br/>{Boolean/Promise} 返回 false、Promise.resolve(false)、 Promise.reject() 将阻止文件删除<br/>                                           | Function        | func.noop |
| autoUpload      | 自动上传                                                                                                                                                                                                                                            | Boolean         | true      |
| progressProps   | 透传给Progress props                                                                                                                                                                                                                               | Object          | -         |
| isPreview       | 是否为预览态                                                                                                                                                                                                                                          | Boolean         | -         |
| renderPreview   | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>Function(value: number) => void<br/>**参数**:<br/>*value*: {number} 评分值                                                                                                                                               | Function        | -         |
| fileKeyName     | 文件对象的 key name                                                                                                                                                                                                                                  | String          | -         |
| fileNameRender  | list 的自定义文件名渲染<br/><br/>**签名**:<br/>Function(file: Object) => Node<br/>**参数**:<br/>*file*: {Object} 文件<br/>**返回值**:<br/>{Node} react node<br/>                                                                                                          | Function        | -         |
| actionRender    | 操作区域额外渲染<br/><br/>**签名**:<br/>Function(file: Object) => Node<br/>**参数**:<br/>*file*: {Object} 文件<br/>**返回值**:<br/>{Node} react node<br/>                                                                                                                | Function        | -         |

### Upload.Card

> 继承 Upload 的 API，除非特别说明

| 参数         | 说明                                                   | 类型       | 默认值       |
| ---------- | ---------------------------------------------------- | -------- | --------- |
| onPreview  | 点击图片回调<br/><br/>**签名**:<br/>Function() => void          | Function | func.noop |
| onChange   | 改变时候的回调<br/><br/>**签名**:<br/>Function() => void         | Function | func.noop |
| onRemove   | 点击移除的回调<br/><br/>**签名**:<br/>Function() => void         | Function | -         |
| onCancel   | 取消上传的回调<br/><br/>**签名**:<br/>Function() => void         | Function | -         |
| itemRender | 自定义成功和失败的列表渲染方式<br/><br/>**签名**:<br/>Function() => void | Function | -         |

### Upload.Dragger

> IE10+ 支持。继承 Upload 的 API，除非特别说明

### Upload.Selecter

> \[底层能力] 可自定义样式的文件选择器

| 参数              | 说明                                                                                                                                                    | 类型       | 默认值       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| disabled        | 是否禁用上传功能                                                                                                                                              | Boolean  | -         |
| multiple        | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件                                                                                                                | Boolean  | false     |
| webkitdirectory | 是否支持上传文件夹，仅在 chorme 下生效                                                                                                                               | Boolean  | -         |
| dragable        | 是否支持拖拽上传，`ie10+` 支持。                                                                                                                                  | Boolean  | -         |
| accept          | 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept) | String   | -         |
| onSelect        | 文件选择回调<br/><br/>**签名**:<br/>Function() => void                                                                                                           | Function | func.noop |
| onDragOver      | 拖拽经过回调<br/><br/>**签名**:<br/>Function() => void                                                                                                           | Function | func.noop |
| onDragLeave     | 拖拽离开回调<br/><br/>**签名**:<br/>Function() => void                                                                                                           | Function | func.noop |
| onDrop          | 拖拽完成回调<br/><br/>**签名**:<br/>Function() => void                                                                                                           | Function | func.noop |
