# 项目启动方式

本仓库的代码组织方式是 lerna+yarn workspace 管理的 monorepo。

项目启动：
`npm run boot`，
它会安装好依赖、将内部相互应用的包 link 起来，对所有包进行初始化构建（npm run prepare）。
