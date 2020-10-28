<h1 align="center">Cloud Design</h1>

<div align="center">阿里云前端通用组件库，based on [Fusion](https://github.com/alibaba-fusion/next)。</div>


## ✨ 特性
- 🌈 提炼自阿里云中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 全面使用 TypeScript 开发，提供完整的类型定义文件。
- 🎨 全面 Css-Variable 化，更加灵活的主题定制能力。


## ⌨️ 本地开发

本仓库的代码组织方式是 lerna+yarn workspace 管理的 monorepo。

### 🛠 克隆代码&安装依赖
```bash
$ git clone git@github.com:aliyun/cloud-design.git
$ cd cloud-design
$ npm run boot
```
执行 `npm run boot`，它会安装好依赖、将内部相互应用的包 link 起来，对所有包进行初始化构建（npm run prepare）。

### 🚀 启动项目
其中 `base-components/` 是基础组件，`extend-components/` 是通用业务组件，以基础组件为例：

```bash
$ cd base-components/
$ npm run dev
```
打开浏览器访问 http://127.0.0.1:3000，即可预览
