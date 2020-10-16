# [@alicloudfe/components](https://www.npmjs.com/package/@alicloudfe/components)

阿里云前端组件库，由混合云&公有云前端团队共建。[预览地址](https://aliyun.github.io/cloud-design/#/button)


## 相关命令

### 本地开发

```sh
npm install / yarn
npm run dev
```
demo 放在 `src/[component]/demo` 文件夹里面，支持热更新

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

