### Shell

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| device             | 预设屏幕宽度，会影响`Navigation` `LocalNavigation` `Ancillary`等是否占据空间<br/><br/>**可选值**:<br/>'phone', 'tablet', 'desktop'     | Enum         |  desktop    |
| type             | 样式类型，分浅色主题、深色主题、主题色主题<br/><br/>**可选值**:<br/>'light', 'dark', 'brand'     | Enum         |  light    |
| fixedHeader   | 是否固定Header，采用sticky布局，不支持 IE11    | Boolean         | false     |

### Shell.Navigation

向子组件透传 isCollapse 的Context，表示当前是否处于折叠状态

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| direction  | 方向<br/><br/>**可选值**:<br/>'hoz', 'ver'    | Enum         |  hoz    |
| collapse   | 是否折叠(折叠成只有icon状态)   | Boolean         | false     |
| align   | 横向模式下，导航排布的位置<br/><br/>**可选值**:<br/>'left', 'right', 'center'   | Enum        |  right  |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |
| trigger   | 菜单展开、收起的触发元素，默认在左上角，不想要可以设置 `null` 来去掉    | ReactNode         |      |
| fixed   | 是否固定，且需要在在 Shell fixedHeader时生效    | Boolean         | false     |

### Shell.LocalNavigation

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）    | Boolean         | false     |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |

### Shell.ToolDock

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）   | Boolean         | false     |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |
| fixed   | 是否固定，且需要在在 Shell fixedHeader时生效    | Boolean         | false     |

### Shell.Ancillary

| 参数                  | 说明          | 类型              | 默认值              |
| -------------------- | ------------ | ----------------- | ------------------ |
| collapse   | 是否折叠（完全收起）   | Boolean         | false     |
| onCollapseChange   | 默认按钮触发的展开收起状态   | Function        | () => {}   |
