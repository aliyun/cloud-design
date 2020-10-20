### Breadcrumb

| 参数        | 说明                                          | 类型               | 默认值   |
| --------- | ------------------------------------------- | ---------------- | ----- |
| children  | 面包屑子节点，需传入 Breadcrumb.Item                  | custom           | -     |
| maxNode   | 面包屑最多显示个数，超出部分会被隐藏, 设置为 auto 会自动根据父元素的宽度适配。 | Number/Enum      | 100   |
| separator | 分隔符，可以是文本或 Icon                             | ReactNode/String | -     |
| component | 设置标签类型                                      | String/Function  | 'nav' |

### Breadcrumb.Item

| 参数   | 说明                                           | 类型     | 默认值 |
| ---- | -------------------------------------------- | ------ | --- |
| link | 面包屑节点链接，如果设置这个属性，则该节点为`<a />` ，否则是`<span />` | String | -   |
