# 项目启动方式

本仓库的代码组织方式是 lerna+yarn workspace 管理的 monorepo。

项目启动：
`npm run boot`，
它会安装好依赖、将内部相互应用的包 link 起来，对所有包进行初始化构建（npm run prepare）。

其中 `base-components/` 是基础组件，`extend-components/` 是通用业务组件

启动好项目以后，进入`base-components/`目录，执行`npm run dev`，启动本地开发环境。

基础组件样式入口在`base-components/src/theme/[theme-name]`。其中包含:

- css 样式
- css 变量定义

如果要增加新的主题，要在`base-components/scripts/theme-data.js`增加 fusion 主题包信息。以便我们能通过脚本拉取 fusion 主题包。
