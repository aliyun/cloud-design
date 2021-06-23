const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const {
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
  copy,
  appendFile,
  updateFile
} = require('../../utils')
const _ = require('lodash')

const root = path.join(__dirname, '../../../')
const pkgPath = path.join(__dirname, '../')

const sourcePkgJson = fs.readJsonSync(path.join(root, 'package.json'), 'utf-8')
const pkgJson = fs.readJsonSync(path.join(pkgPath, 'package.json'), 'utf-8')
const pkgVersion = pkgJson.version
const pkgName = pkgJson.name

console.log(`正在生成${pkgName}@${pkgVersion}`)

// 同步基线@alifd/next版本
pkgJson.dependencies['@alifd/next'] = sourcePkgJson.dependencies['@alifd/next']
fs.writeFileSync(
  path.join(pkgPath, 'package.json'),
  JSON.stringify(pkgJson, null, 2) + '\n'
)
//
//
;(async () => {
  const esmDir = path.join(pkgPath, 'esm')
  const libDir = path.join(pkgPath, 'lib')
  const distDir = path.join(pkgPath, 'dist')
  const typesDir = path.resolve(pkgPath, 'types')

  rimraf.sync(esmDir)
  rimraf.sync(libDir)
  rimraf.sync(distDir)
  rimraf.sync(typesDir)

  await Promise.all([
    copy(path.join(root, 'es'), esmDir),
    copy(path.join(root, 'lib'), libDir),
    copy(path.join(root, 'types'), typesDir),
    fs.copy(
      path.join(root, 'dist/xconsole.css'),
      path.join(distDir, 'xconsole.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-no-reset.css'),
      path.join(distDir, 'xconsole-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-var.css'),
      path.join(distDir, 'xconsole-var.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-dark.css'),
      path.join(distDir, 'xconsole-dark.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-dark-no-reset.css'),
      path.join(distDir, 'xconsole-dark-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/xconsole-dark-var.css'),
      path.join(distDir, 'xconsole-dark-var.css')
    ),
    fs.copy(path.join(root, 'dist/wind.css'), path.join(distDir, 'wind.css')),
    // 产生 wind-without-icon-font ，用于私有部署用户
    fs
      .copy(
        path.join(root, 'dist/wind.css'),
        path.join(distDir, 'wind-without-icon-font.css')
      )
      .then(() =>
        updateFile(
          path.join(distDir, 'wind-without-icon-font.css'),
          withoutIconFont
        )
      ),
    fs.copy(
      path.join(root, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/wind-var.css'),
      path.join(distDir, 'wind-var.css')
    ),
    fs.copy(path.join(root, 'dist/xconsole.js'), path.join(distDir, 'wind.js')),
    fs.copy(
      path.join(root, 'dist/index.js'),
      path.join(distDir, 'wind.min.js')
    ),
    // 兼容旧版目录结构
    fs.copy(
      path.join(root, 'dist/wind.min.css'),
      path.join(distDir, 'wind.min.css')
    ),
    fs.copy(
      path.join(root, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.min.css')
    )
  ])

  // 将业务组件的cssVar加入组件库css中
  // 从而用户无需自己引入
  const appendXconsoleCssVar = [
    '',
    fs.readFileSync(
      require.resolve(
        '@alicloud/console-components-app-layout/dist/vars/xconsole.css'
      )
    ),
    fs.readFileSync(
      require.resolve(
        '@alicloud/console-components-console-menu/dist/vars/xconsole.css'
      )
    )
  ].join('\n')

  await Promise.all([
    appendFile(
      path.join(esmDir, 'index.js'),
      codeExportLibInfoESM('@alicloud/console-components', pkgVersion)
    ),
    appendFile(
      path.join(libDir, 'index.js'),
      codeExportLibInfoCJS('@alicloud/console-components', pkgVersion)
    ),
    appendFile(path.join(distDir, 'xconsole-var.css'), appendXconsoleCssVar),
    appendFile(path.join(distDir, 'xconsole.css'), appendXconsoleCssVar)
  ])
})()

function withoutIconFont(originalText) {
  /*
  匹配css中的以下声明：
  @font-face {
    font-family: NextIcon
    src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot");
    src: url("//at.alicdn.com/t/font_1435786_mueafw9pwd.eot?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff2") format("woff2"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.woff") format("woff"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.ttf") format("truetype"), url("//at.alicdn.com/t/font_1435786_mueafw9pwd.svg#NextIcon") format("svg"); }
  */
  const reg =
    /@font-face\s*{\s*font-family:\s*NextIcon;[\s\S]*?format\("svg"\);\s*}/g

  const match = originalText.match(reg)

  if (match.length !== 1) {
    throw new Error(`没有找到声明NextIcon的@font-face规则`)
  }

  const result = originalText.replace(reg, '')

  return result
}
