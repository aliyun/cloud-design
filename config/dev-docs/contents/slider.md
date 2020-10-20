### Slider

| 参数                 | 说明                                                                                                 | 类型             | 默认值      |
| ------------------ | -------------------------------------------------------------------------------------------------- | -------------- | -------- |
| adaptiveHeight     | 是否使用自适应高度                                                                                          | Boolean        | false    |
| animation          | 动效类型，默认是'slide'                                                                                    | String/Boolean | 'slide'  |
| arrows             | 是否显示箭头                                                                                             | Boolean        | true     |
| arrowSize          | 导航箭头大小 可选值: 'medium', 'large'<br/><br/>**可选值**:<br/>'medium', 'large'                                 | Enum           | 'medium' |
| arrowPosition      | 导航箭头位置 可选值: 'inner', 'outer'<br/><br/>**可选值**:<br/>'inner', 'outer'                                   | Enum           | 'inner'  |
| arrowDirection     | 导航箭头的方向 可选值: 'hoz', 'ver'<br/><br/>**可选值**:<br/>'hoz', 'ver'                                          | Enum           | 'hoz'    |
| autoplay           | 是否自动播放                                                                                             | Boolean        | false    |
| autoplaySpeed      | 自动播放的速度                                                                                            | Number         | 3000     |
| nextArrow          | 向后箭头                                                                                               | ReactElement   | null     |
| prevArrow          | 向前箭头                                                                                               | ReactElement   | null     |
| centerMode         | 是否启用居中模式                                                                                           | Boolean        | false    |
| dots               | 是否显示导航锚点                                                                                           | Boolean        | true     |
| dotsDirection      | 导航锚点位置<br/><br/>**可选值**:<br/>'hoz', 'ver'                                                             | Enum           | 'hoz'    |
| dotsRender         | 自定义导航锚点<br/><br/>**签名**:<br/>Function() => void                                                       | Function       | null     |
| draggable          | 是否可拖拽                                                                                              | Boolean        | true     |
| infinite           | 是否使用无穷循环模式                                                                                         | Boolean        | true     |
| defaultActiveIndex | 初始被激活的轮播图                                                                                          | Number         | 0        |
| lazyLoad           | 是否启用懒加载                                                                                            | Boolean        | false    |
| slideDirection     | 轮播方向<br/><br/>**可选值**:<br/>'hoz', 'ver'                                                               | Enum           | 'hoz'    |
| slidesToShow       | 同时展示的图片数量                                                                                          | Number         | 1        |
| slidesToScroll     | 同时滑动的图片数量                                                                                          | Number         | 1        |
| speed              | 轮播速度                                                                                               | Number         | 600      |
| activeIndex        | 跳转到指定的轮播图（受控）                                                                                      | Number         | -        |
| triggerType        | 锚点导航触发方式<br/><br/>**可选值**:<br/>'click', 'hover'                                                       | Enum           | 'click'  |
| onChange           | 轮播切换的回调函数<br/><br/>**签名**:<br/>Function(index: Number) => void<br/>**参数**:<br/>*index*: {Number} 幻灯片的索引 | Function       | () => {} |
| centerPadding      | Side padding when in center mode (px or %); 展示部分为center，pading会产生前后预览                              | String         | '50px'   |
| cssEase            | CSS3 Animation Easing,默认‘ease’                                                                     | String         | 'ease'   |
| focusOnSelect      | 多图轮播时，点击选中后自动居中                                                                                    | Boolean        | false    |
