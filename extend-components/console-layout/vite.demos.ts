import type { UserConfig } from 'vite'
import * as vpr from 'vite-plugin-react'
import pages from 'vite-plugin-react-pages'
import mdx from 'vite-plugin-mdx'

module.exports = {
  jsx: 'react',
  plugins: [vpr, mdx(), pages('demos')],
  optimizeDeps: {
    include: [
      'styled-components',
      '@alicloudfe/components',
      'react-router-dom',
      '@alicloudfe/components-console-page',
      '@alicloudfe/components-console-menu',
      'classnames'
    ]
  },
  alias: {
    '@alicloudfe/components-console-layout': '/src'
  },
  minify: false
} as UserConfig
