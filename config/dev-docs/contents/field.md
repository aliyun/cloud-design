### 初始化

    let myfield = new Field(this [,options]);

    或者使用hooks

    let myfield = Field.useField([options]); // 要求 react 版本 > 16.8

| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
| this | 传入调用class的this | React.Component | 必须设置| |
| options | 一些事件配置, 详细参数如下 | Object | 非必须| |

`options` 配置项

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|-----------|--------|
| onChange | 所有组件的change都会到达这里\[setValue不会触发该函数] | Function(name,value) | |
| parseName | 是否翻译`init(name)`中的`name`(getValues会把带`.`的字符串转换成对象) | Boolean | false|
| forceUpdate | 仅建议PureComponent的组件打开此强制刷新功能，会带来性能问题(500个组件为例：打开的时候render花费700ms, 关闭时候render花费400ms) | Boolean  |false|
| scrollToFirstError | field.validate的时候滚动到第一个出错的组件, 如果是整数会进行偏移 | Boolean/Number  |true|
| autoUnmount | 自动删除Unmout元素，如果想保留数据可以设置为false | Boolean  |true|
| autoValidate | 是否修改数据的时候就自动触发校验, 设为 false 后只能通过 validate() 来触发校验  | Boolean  |true|
| values | 初始化数据 | Object ||

#### API接口

`new`之后的对象提供的api接口 （例：`myfield.getValues()`）(`set` 开头的api函数不要在render里面操作, 可能会触发死循环)

| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
| init  | 初始化每个组件，[详细参数如下](#init)）| Function(name:String, option:Object)| | |
| getValues | 获取一组输入控件的值，如不传入参数，则获取全部组件的值 | Function(\[names: String\[]]) | | |
| getValue | 获取单个输入控件的值 | Function(name: String) | | |
| setValues | 设置一组输入控件的值（会触发render，请遵循react时机使用) | Function(obj: Object) | | |
| setValue | 设置单个输入控件的值 （会触发render，请遵循react时机使用)| Function(name: String, value) | | |
| validate | 校验并获取一组输入域的值与 Error | Function(\[names: String\[]], callback: Function(errors, values)) | | |
| getError | 获取单个输入控件的 Error | Function(name: String) | | |
| getErrors | 获取一组输入控件的 Error | Function(\[name: String]) | | |
| setError | 设置单个输入控件的 Error | Function(name: String, errors:String/Array\[String]) | | |
| setErrors | 设置一组输入控件的 Error | Function(obj: Object) | | |
| reset  | 重置一组输入控件的值、清空校验 | Function(\[names: String\[]])| ||
| resetToDefault  | 重置一组输入控件的值为默认值 | Function(\[names: String\[]])| ||
| getState  | 判断校验状态 | Function(name: String)| 'error' 'success' 'loading' '' | '' |
| getNames  | 获取所有组件的key | Function()|  |  |
| remove  | 删除某一个或者一组控件的数据，删除后与之相关的validate/value都会被清空 | Function(name: String/String\[])|  |  |
| addArrayValue  | 添加 name 是数组格式的数据, 并且自动处理其他 name 的数组错位问题 | Function(key: String, index: Number, value1, value2, ...)|  |  |
| deleteArrayValue  | 删除 name 是数组格式的数据, 并且自动处理其他 name 的数组错位问题 | Function(key: String, index: Number, howmany)|  |  |

#### init

    init(name, options, props)

| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
| name | 必填输入控件唯一标志 | String | |  |
| options.valueName | 组件值的属性名称，如 Checkbox 的是 `checked`，Input是 `value` | String | | 'value' |
| options.initValue | 组件初始值(组件第一次render的时候才会读取，后面再修改此值无效),类似defaultValue | any | | |
| options.trigger | 触发数据变化的事件名称 | String | | 'onChange' |
| options.rules | 校验规则 | Array/Object | | | |
| options.getValueFormatter | 自定义从组件获取 `value`  ，详细用法查看demo `自定义数据获取` | Function(value,...args) 参数顺序和组件是完全一致的 | | | |
| options.setValueFormatter | 自定义转换 `value` 到组件 ，详细用法查看demo `自定义数据获取` | Function(value)  | | | |
| props | 组件自定义的事件可以写在这里  | Object | | | |
| autoValidate | 是否修改数据的时候自动触发校验单个组件的校验, 设为 false 后只能通过 validate() 来触发校验 | Boolean  |true|

返回值

    {id,value,onChange}

#### rules

    {
        rules:[{ required: true }]
    }

多个rule

    {
        rules:[{required:true,trigger:'onBlur'},{pattern:/abcd/,message:'abcd不能缺'},{validator:(rule, value, callback)=>{callback('出错了')}}]
    }

| 参数      | 说明                                     | 类型       |  可选值 | 使用类型 |
|-----------|------------------------------------------|------------|-------|--------|
| required | 不能为空| Boolean | true | `undefined/null/“”/[]` 会触发此规则) |
| pattern | 校验正则表达式 | 正则 | | |
| minLength | 字符串最小长度 / 数组最小个数 | Number | | String/Number/Array |
| maxLength | 字符串最大长度 / 数组最大个数 | Number | | String/Number/Array |
| length | 字符串精确长度 / 数组精确个数 | Number | | String/Number/Array |
| min | 最小值 | Number | | String/Number |
| max | 最大值 | Number | | String/Number |
| format | 对常用 pattern 的总结	 | String | url、email、tel、number | String |
| validator | 自定义校验, 校验的结果通过用户传递给 callback 的参数决定(校验成功的时候不要忘记执行 `callback()`,否则会校验不返回): <br/> - callback() 无参数表示校验成功 <br/> - callback('this is a error msg') 有参数表示校验失败，并且参数为错误信息 | Function(rule,value,callback) | | |
| trigger | 触发校验的事件名称 | String/Array | onChange/onBlur/... | onChange |
| message | 出错时候信息 | String | | |
