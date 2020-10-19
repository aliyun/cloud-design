const path = require('path')
const globby = require('globby')
import * as Chain from 'webpack-chain'

module.exports = {
  presets: [
    [
      require.resolve('@alicloud/console-toolkit-preset-multi-entry'),
      {
        consoleOSId: 'alicloud-component-demos',
        getDemos() {
          const baseDir = path.resolve(__dirname, '../base-components/src/')
          const paths = globby.sync('**/demo/*.tsx', { cwd: baseDir })
          const res = paths.map(relativePath => {
            const match = relativePath.match(/^(.*)\/demo\/(.*)\.tsx$/)
            if (!match) throw new Error(`非预期的demo路径"${relativePath}"`)
            const componentName = match[1]
            const demoName = match[2]
            return {
              key: `${componentName}/${demoName}`,
              path: path.resolve(baseDir, relativePath)
            }
          })
          return res
        },
        getMarkdownEntries: () => {
          const baseDir = path.resolve(__dirname, '../base-components/src/')
          const paths = globby.sync('*/index.md', { cwd: baseDir })

          const res = paths.map((relativePath: string) => {
            const match = relativePath.match(/(.*)\/index\.md/)
            if (!match) throw new Error(`unexpected path ${relativePath}`)
            return {
              key: 'docs/' + match[1],
              path: path.resolve(baseDir, relativePath)
            }
          })
          return res
        },
        chainWebpack(chain: Chain) {
          chain.resolve.alias.set(
            '@alicloudfe/components',
            path.resolve(__dirname, '../base-components/src/')
          )
        }
      }
    ]
  ]
}
