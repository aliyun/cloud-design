### ConfigProvider

| 参数             | 说明                                                                                                                                                                                                     | 类型             | 默认值   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ----- |
| errorBoundary  | 是否开启错误捕捉 errorBoundary<br/>如需自定义参数，请传入对象 对象接受参数列表如下：<br/><br/>fallbackUI `Function(error?: {}, errorInfo?: {}) => Element` 捕获错误后的展示<br/>afterCatch `Function(error?: {}, errorInfo?: {})` 捕获错误后的行为, 比如埋点上传 | Boolean/Object | false |
| pure           | 是否开启 Pure Render 模式，会提高性能，但是也会带来副作用                                                                                                                                                                    | Boolean        | -     |
| warning        | 是否在开发模式下显示组件属性被废弃的 warning 提示                                                                                                                                                                          | Boolean        | true  |
| rtl            | 是否开启 rtl 模式                                                                                                                                                                                            | Boolean        | -     |
| device         | 设备类型，针对不同的设备类型组件做出对应的响应式变化<br/><br/>**可选值**:<br/>'tablet', 'desktop', 'phone'                                                                                                                             | Enum           | -     |
| children       | 组件树                                                                                                                                                                                                    | any            | -     |
| popupContainer | 指定浮层渲染的父节点, 可以为节点id的字符串，也可以返回节点的函数                                                                                                                                                                     | any            | -     |

<!-- api-extra-start -->

### ConfigProvider.config(Component)

传入组件，生成受 ConfigProvider 控制的 HOC 组件，如果组件没有声明 shouldComponentUpdate 方法，会添加如下 shouldComponentUpdate 方法以支持 ConfigProvider 的 pure 属性

```js
Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.pure) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    return true;
};
```

### ConfigProvider.getContextProps(props, displayName)

传入组件的 props 和 displayName，得到和 childContext 计算过的包含有 preifx/locale/pure 的对象，一般用于通过静态方法生成脱离组件树的组件。

### ConfigProvider.getContext()

通过该方法可以获取到 ConfigProvider 的上下文，格式如下。若有多层级 ConfigProvider 嵌套，会返回merge后的结果，关系近的优先。

```js
{
    prefix: nextPrefix,
    locale: nextLocale,
    pure: nextPure,
    warning: nextWarning
}
```

### ConfigProvider.initLocales(locales)

配置所有语言包, 可配合 `ConfigProvider.setLanguage` 方法，确定组件使用的语言包。

```js
ConfigProvider.initLocales({
    'zh-cn': {},
    'en-us': {}
});
```

### ConfigProvider.setLanguage(language)

设置语言，参数 `language` 需要能在 `ConfigProvider.initLocales` 方法传入的参数的 key 中找到， 默认为 `zh-cn`

```js
ConfigProvider.setLanguage('zh-cn');
```

### ConfigProvider.setLocale(locale)

直接设置语言包

```js
// 相当于 同时用ConfigProvider.initLocales 和 ConfigProvider.setLanguage
ConfigProvider.setLocale({
    DatePicker: {},
    Dialog: {}
});
```

### ConfigProvider.setDirection(dir)

设置组件展示方向，当传入 `rtl`时，会在组件的根DOM节点加上 `dir="rtl"`，同时组件展示rtl视觉。可用于阿拉伯等阅读顺序从右到左的国家。

```js
ConfigProvider.setDirection('rtl');
```

### ConfigProvider.getLocale()

获取当前的语言包

### ConfigProvider.getLanguage()

获取当前设定的语言

### ConfigProvider.getDirection()

获取当前设定的方向

<!-- api-extra-end -->
