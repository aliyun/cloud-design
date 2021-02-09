const path = require('path')
const fs = require('fs-extra')
const rimraf = require('rimraf')
const {
  codeExportLibInfoESM,
  codeExportLibInfoCJS,
  copy,
  appendFile
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
    fs.copy(
      path.join(root, 'dist/wind-no-reset.css'),
      path.join(distDir, 'wind-noreset.css')
    ),
    fs.copy(
      path.join(root, 'dist/wind-var.css'),
      path.join(distDir, 'wind-var.css')
    ),
    fs.copy(path.join(root, 'dist/index.js'), path.join(distDir, 'wind.js')),
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
  await Promise.all([
    appendFile(
      path.join(esmDir, 'index.js'),
      codeExportLibInfoESM('@alicloud/console-components', pkgVersion)
    ),
    appendFile(
      path.join(libDir, 'index.js'),
      codeExportLibInfoCJS('@alicloud/console-components', pkgVersion)
    )
  ])
})()
