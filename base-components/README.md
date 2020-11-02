<h1 align="center">
<a href="https://www.npmjs.com/package/@alicloudfe/components">@alicloudfe/components</a>
</h1>

<div align="center">阿里云前端基础组件库，由混合云&公有云前端团队共建。 <a href="https://aliyun.github.io/cloud-design/#/button">预览地址</a></div>


# 💻 浏览器支持

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![UC](https://raw.github.com/alrra/browser-logos/master/src/uc/uc_48x48.png) |
| :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|                                            ✔                                             |                                              ✔                                              |                                         ✔                                          |                                                             9+ ✔                                                             |                                            ✔                                             |                                           ✔                                           |                                      ✔                                       |

# 🚀 快速开始
## 🛠 安装

### 1.使用 npm 安装

```bash
npm install @alicloudfe/components --save
```

### 2.浏览器直接引用

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 `AliCloudComponents`。我们在 npm 包中提供了 `@alicloudfe/components/dist` 目录下的 `index.js` 和 `hybridcloud.css` / `xconsole.css` 等样式文件，也可以通过 [unpkg](https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/) 进行下载。

```html
<link rel="stylesheet" href="https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/hybridcloud.css" />

<script src="https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/index.js"></script>

// 以上引入都是引入的最新版本 @alicloudfe/components
，我们也可以引入固定版本的组件资源，以保证代码稳定
<script src="https://unpkg.alibaba-inc.com/@alicloudfe/components@1.0.12/dist/index.js"></script>
```

关于样式文件的说明请参考[这里](#关于样式文件)

## ☔️ 依赖

-   `@alicloudfe/components` 基于 `react@16` 开发，目前并不兼容 `react@16` 以下的版本，且将 react/react-dom 作为 peerDependencies，需要用户手动提前安装或引入。
-   `@alicloudfe/components` 在处理日期时间相关组件逻辑时，使用了 [moment](https://github.com/moment/moment) 库，且将 moment 作为 peerDependencies，需要用户手动提前安装或引入。

## 🔨 示例

```jsx
import { Button, DatePicker } from '@alicloudfe/components';

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </>
);
```

引入样式：

```jsx
import '@alicloudfe/components/dist/hybridcloud.css'; 
```

## 💄关于样式文件
本组件库没有默认的样式主题，大家可根据业务选择不同的样式文件，目前的主题包括：

- PaaS 侧
  - `hybridcloud`: 混合云亮色主题
  - `hybridcloud-dark`: 混合云暗色主题
  - `xconsole`:公有云 xconsole 主题
  - `wind`: 公有云 wind（旧版 xconsole） 主题

- SaaS 侧
  - `yunxiao`: 云效主题
  - `aone`: Aone 主题

对于每一个主题，我们生成了对应的四份样式文件供大家使用，以混合云亮色主题为例：
- [`hybridcloud.css`](https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/hybridcloud.css) : 全量未压缩样式（组件样式 + css var）
- [`hybridcloud.min.css`](https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/hybridcloud.min.css) : 全量压缩后样式（组件样式 + css var）
- [`hybridcloud-no-var.css`](https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/hybridcloud-no-var.css) : 纯组件样式，不包括 css var 定义
- [`hybridcloud-var.css`](https://unpkg.alibaba-inc.com/@alicloudfe/components/dist/hybridcloud-var.css) : 纯 css var 定义样式文件，用于主题切换


## 🔌 相关插件

- [@alicloud/console-toolkit-fusion-css-loader](https://github.com/aliyun/alibabacloud-console-toolkit/tree/preset-demos/packages/fusion-css-loader): 一个 webpack loader，用来修改 fusion 的 css 的选择器类名前缀。比如把 `.next-btn` 的类名修改成 `.my-prefix-btn`。 这样做的目的是，控制 fusion 样式的作用范围，让一个页面中可以同时存在多份不同版本的 fusion，同时不会出现样式冲突。

- [build-plugin-fusion-css](https://www.npmjs.com/package/build-plugin-fusion-css): build-scripts 插件，功能同上，用于 build-scripts 体系


# 🤝 参与共建
一个好的开源组件库是需要不断打磨的，本组件库也是我们和 [fusion](https://github.com/alibaba-fusion/next) 团队共建后的成果，欢迎大家提 PR，或者联系[佐七](https://github.com/zuoqi705)、[萧雨](https://github.com/csr632)成为仓库成员来提 MR。如何贡献请参考[贡献指南](https://github.com/aliyun/cloud-design/blob/master/base-components/docs/CONTRIBUTING.md)。