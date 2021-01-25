import type { UserConfig, Plugin } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import pages from 'vite-plugin-react-pages'
import * as path from 'path'
import * as fs from 'fs-extra'

const pagesDir = path.join(__dirname, 'pages')

module.exports = {
  root: __dirname,
  jsx: 'react',
  plugins: [
    reactRefresh(),
    mdx(),
    pages({ pagesDir, findPages, useHashRouter: true }),
    cssSwitchPlugin()
  ],
  alias: {
    '@alicloudfe/components': '/src'
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
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
      'react-dnd',
      '@alifd/next/lib/locale/en-us',
      '@alifd/next/lib/locale/zh-cn',
      'moment'
    ]
  },
  build: {
    outDir: 'docs-dist'
  },
  css: {
    preprocessorOptions: {
      includePaths: ['node_modules', '../node_modules']
    }
  }
} as UserConfig

function cssSwitchPlugin(): Plugin {
  return {
    name: 'cssSwitchPlugin',
    load(id) {
      if (id.includes('?pureCSS')) {
        return fs.readFile(id.replace('?pureCSS', ''), 'utf-8')
      }
    }
  }
}

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
