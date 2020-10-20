### Icon

| 参数   | 说明                                                                                | 类型          | 默认值      |
| ---- | --------------------------------------------------------------------------------- | ----------- | -------- |
| size | 指定图标大小<br/><br/>**可选值**<br/> xxs, xs, small, medium, large, xl, xxl, xxxl, inherit | Enum/Number | 'medium' |
| type | 指定显示哪种图标                                                                          | String      | -        |

<!-- api-extra-start -->

### Icon.createFromIconfontCN

通过自定义 iconfont源来使用使用svg格式的图片，默认有缓存处理

```js
import { Icon } from '@alifd/next';

const CustomIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
});

// 同 Icon 基础元素一样，有相同的 size 设定
ReactDOM.render(
    <div>
        <CustomIcon type="icon-store" size="small"/>
        <CustomIcon type="icon-gift"/>
        <CustomIcon type="icon-pic" size="large"/>
    </div>
, mountNode);
```

<!-- api-extra-end -->
