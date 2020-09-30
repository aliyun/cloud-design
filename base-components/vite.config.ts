import type { UserConfig } from 'vite'
import * as vpr from 'vite-plugin-react'
import pages from 'vite-plugin-react-pages'
import mdx from 'vite-plugin-mdx'
import * as path from 'path'
import * as fs from 'fs-extra'
import { compileCss } from 'vite/dist/node/utils/cssUtils'

const pagesDir = path.join(__dirname, 'pages')

module.exports = {
  root: __dirname,
  jsx: 'react',
  plugins: [vpr, mdx(), pages({ pagesDir, findPages, useHashRouter: true })],
  alias: {
    '@alicloudfe/components': '/src'
  },
  optimizeDeps: {
    include: [
      'prop-types',
      'solarlunar',
      'react-cropper',
      'whatwg-fetch',
      'jsonp',
      'classnames',
      'styled-components',
      'redux',
      'react-redux',
      'react-copy-to-clipboard',
      'react-dnd-html5-backend',
      'react-dnd'
    ]
  },
  minify: false,
  outDir: 'docs-dist',
  cssPreprocessOptions: {
    includePaths: ['node_modules', '../node_modules']
  },
  configureServer: ({ app }) => {
    app.use(async (ctx, next) => {
      if ('pureCSS' in ctx.query) {
        ctx.query.import = ''
        await next()
        if (ctx.body) {
          // 不要直接将样式挂载，而是返回样式字符串，由应用自己挂载
          ctx.body = ctx.body.replace(/^updateStyle.*/m, '')
        }
      } else {
        return next()
      }
    })
  },
  rollupInputOptions: {
    plugins: [
      {
        name: 'build-pure-css',
        async resolveDynamicImport(importee, importer) {
          if (typeof importee === 'string' && importee.includes('?pureCSS')) {
            const resolved = await this.resolve(importee, importer, {
              skipSelf: true
            })
            const result = resolved.id.replace('.scss?pureCSS', '?pureCSS')
            return result
          }
        },
        load(id) {
          if (id.includes('?pureCSS')) {
            return fs.readFile(id.replace('?pureCSS', '.scss'), 'utf-8')
          }
        },
        async transform(css: string, id: string) {
          if (id.includes('?pureCSS')) {
            let res = await compileCss(
              __dirname,
              id,
              {
                id: '',
                source: css,
                filename: id,
                scoped: false,
                modules: false,
                preprocessLang: 'scss',
                preprocessOptions: {
                  includePaths: ['node_modules', '../node_modules']
                }
              },
              true
            )
            if (typeof res !== 'string') res = res.code
            return `export default ${JSON.stringify(res)}`
          }
          return undefined
        }
      }
    ]
  }
} as UserConfig

// 修改css选择器的postcss插件
function changePrefix(transform) {
  return function (css) {
    css.walkRules((rule) => {
      const newSelectors = rule.selectors.map((selector) => {
        const res = transform(selector)
        if (res) return res
        return selector
      })
      rule.selectors = newSelectors
    })
  }
}

async function findPages(helpers) {
  const demo = path.join(__dirname, 'src')
  const pagesByComponent: { [componentName: string]: any } = {}

  let demoPaths = await helpers.globFind(demo, '*/demo/**/*.{[tj]s?(x),md?(x)}')

  await Promise.all(
    demoPaths.map(async ({ relative, absolute }) => {
      const match = relative.match(/(.*)\/demo\/(.*)\.([tj]sx?|mdx?)$/)
      if (!match) throw new Error('unexpected file: ' + absolute)
      const [_, componentName, demoPath] = match
      const publicPath = `/${componentName}`
      // register the demo module as page daga
      helpers.addPageData({
        pageId: publicPath,
        key: `_${demoPath}`,
        dataPath: absolute,
        staticData: await helpers.extractStaticData(absolute)
      })
      if (!pagesByComponent[componentName]) {
        pagesByComponent[componentName] = {
          publicPath
        }
      }
    })
  )

  // add static data(title) for each component page
  Object.entries(pagesByComponent).forEach(
    ([componentName, { publicPath }]) => {
      helpers.addPageData({
        pageId: publicPath,
        key: 'title',
        staticData: componentName
      })
    }
  )

  // we also want to collect pages from `/pages` with basic filesystem routing convention
  const defaultPages = await helpers.defaultFindPages(pagesDir)
  defaultPages.forEach(helpers.addPageData)
}
