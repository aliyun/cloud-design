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
      'lodash.truncate',
      '@alicloudfe/components-fake-browser'
    ]
  },
  alias: {
    '@alicloudfe/components-truncate': '/src'
  },
  minify: false
} as UserConfig
