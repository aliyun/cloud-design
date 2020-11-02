# 贡献指南

这篇指南会指导你如何为 Cloud Design 贡献一份自己的力量，如想成为仓库成员，请联系[佐七](https://github.com/zuoqi705)、[萧雨](https://github.com/csr632)。

## 👩‍💻 开发流程
首先 clone 代码，安装依赖，进入到基础组件目录下面
```bash
$ git clone git@github.com:aliyun/cloud-design.git
$ cd cloud-design
$ npm run boot
$ cd base-components/
```

以下为常用的命令：

- `npm run dev` 在本地运行基础组件工程

- `npm run prepublishOnly` 构建全部，包括 js、css
- `npm run build` 构建 js
- `npm run build-css` 构建 css

- `npm run update-theme` 更新主题
- `npm publish` 发布组件库
- `npm run demos-deploy` 更新站点


## 📖 目录结构

```
.
├── CHANGELOG.md
├── LICENSE
├── README.md
├── breezr.config.js                      # 构建配置
├── lib                                   # es5 组件
├── es                                    # es6 组件，用于 tree-shaking
├── dist                                  # 构建产物目录
│   ├── aone-no-var.css                   # 纯组件样式（不带 css var 定义）
│   ├── aone-var.css                      # css var 定义文件，用于主题切换
│   ├── aone.css                          # 完整样式文件
│   ├── aone.min.css                      # 压缩后的完整样式文件
│   ├── index.js                          # 唯一 js 文件
│   ├── xconsole-no-reset.css             # 不带 reset 样式的样式文件（默认带）
│   ├── xconsole-no-var.css
│   ├── xconsole-var.css
│   ├── xconsole.css
│   ├── xconsole.min.css
│   └── ...
├── docs
│   └── CONTRIBUTING.md
├── fusion-theme                          # fusion 主题包目录
│   ├── hybridcloud                       
│   ├── hybridcloud-dark
│   ├── wind
│   ├── xconsole
│   └── yunxiao
├── index.html
├── package.json
├── pages                                 # 站点页面展示相关
│   ├── 404$.tsx
│   ├── _theme.tsx                        # 实现主题切换
│   ├── declare.d.ts
│   ├── index$.md
│   ├── style.scss
│   └── theme-vars                        # 不同主题的 css var
├── scripts                               # 运行脚本
│   ├── build-css.js                      # 构建 css
│   ├── copy-comp.js                      # 拷贝 fusion 组件
│   ├── gene-css-def.js                   # 生成 css var 定义
│   ├── postinstall.js
│   ├── sync-demo.js                      # 同步 fusion demo
│   ├── sync-markdown.js                  # 同步 fusion markdown
│   ├── theme-data.js                     # 主题数据配置文件
│   └── update-theme.js                   # 更新主题
├── src                                   # 组件源代码
│   ├── affix
│   ├── button
│   │   ├── demo                          # demo 文件夹
│   │   ├── index.md                      # api 说明文档
│   │   ├── index.tsx                     # 组件 js
│   │   └── main.scss                     # 组件样式
|   ├── ...
|   ├── common-var.scss                   # 公共 css var
|   ├── common.scss                       # 公共组件样式
│   └── virtual-list
├── tsconfig.json
└── vite.config.ts                        # 本地开发配置
```

## 🎨 新增主题
本组件库的定位是**阿里云通用基础组件库**，原则为通过一份 js、多份 css 来覆盖不同业务，所以**能用 css 实现的尽可能通过 css 实现**，在这一点上需要和设计师们拉齐。接下来将介绍如何新增一份主题：

### 主题样式入口
基础组件样式入口在 `base-components/src/theme/[theme-name]`下面，以[混合云亮色主题](https://github.com/aliyun/cloud-design/tree/master/base-components/src/theme/hybridcloud)为例，目录结构如下:

```
.
├── hybridcloud
│   ├── css-var-custom.scss        # 自定义 css var 变量值
│   ├── css-var-definition.scss    # css var 定义，通过 fusion 主题包生成
│   ├── index-no-var.scss          # 不带 css var 定义的组件样式
│   ├── index.scss                 # 带 css var 定义的组件样式
│   └── overwrite.scss             # 主题独有覆盖样式          
```

### 主题变量样式入口
主题变量样式入口在 `base-components/pages/theme-vars/[theme-name]` 下面，这里我们为每个主题添加了一个 scope 来区分 css var 生效的作用域。以[混合云亮色主题](https://github.com/aliyun/cloud-design/blob/master/base-components/pages/theme-vars/hybridcloud.scss)为例: 

```scss
$css-var-scope: '.theme-hybridcloud'; // 定义生效 scope
@import '../../src/theme/hybridcloud/css-var-definition.scss'; // 引入基础组件 css var 定义
@import '../../src/theme/hybridcloud/css-var-custom.scss'; // 引入自定义 css var
```

### 主题数据配置文件
主题数据配置文件在 `base-components/scripts/theme-data.js` [里面](https://github.com/aliyun/cloud-design/blob/master/base-components/scripts/theme-data.js)，我们更新主题、构建 css 脚本都是依赖这份数据配置，其中可选字段有：

- `packageName`: fusion 主题包名
- `themeName`: 主题名称
- `ignore`: 是否生成对应主题到 `fusion-theme` 文件夹中，默认为 `false`，如果新增的主题是基于已有主题的，则设为 `true`，可参考 `aone` 主题

新增完主题数据配置后，执行 `npm run update-theme` 即可拉取新的 fusion 主题包样式文件到 `fusion-theme/` 下面

### 独有主题组件样式覆盖
有时候我们的组件样式无法放到 `main.scss` 里面成为组件公共样式，我们可以在 `src/[component]/` 下面新增一份自己独有主题的样式文件，然后在 `src/theme/[theme-name]/overwrite.scss` 下面引入，可以参考[这里](https://github.com/aliyun/cloud-design/blob/master/base-components/src/theme/hybridcloud/overwrite.scss)和[这里](https://github.com/aliyun/cloud-design/blob/master/base-components/src/checkbox/hybridcloud.scss)



## 🙋‍♀️ 新增组件
本仓库为阿里云通用基础组件库，如想新增组件的话建议写到自己团队的基础组件库里面或者添加到通用业务组件 (extend-componets/) 里面