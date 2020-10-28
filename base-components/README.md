<h1 align="center">
<a href="https://www.npmjs.com/package/@alicloudfe/components">@alicloudfe/components</a>
</h1>

<div align="center">阿里云前端组件库，由混合云&公有云前端团队共建。 <a href="https://aliyun.github.io/cloud-design/#/button">预览地址</a></div>


## 相关命令

### 构建

- 构建全部

  ```sh
  npm run prepublishOnly
  ```

- 构建 dist/index.js

  ```sh
  npm run build
  ```

- 构建 dist/*.css

  ```sh
  npm run build-css
  ```

- 构建 lib

  ```sh
  npm run babel
  ```

- 构建 es

  ```sh
  npm run babel:esm
  ```

### 更新主题包

```sh
npm run update-theme
```

### 发布
```js
npm publish
```

### 同步预览站点
```sh
npm run demos-deploy
```

### 📖 目录结构

```

```

基础组件样式入口在`base-components/src/theme/[theme-name]`。其中包含:

- css 样式
- css 变量定义

如果要增加新的主题，要在`base-components/scripts/theme-data.js`增加 fusion 主题包信息。以便我们能通过脚本拉取 fusion 主题包。

