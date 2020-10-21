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
      '@alicloudfe/components-fake-browser',
      'lodash.truncate',
      'prop-types',
      'classnames',
      '@alicloudfe/components-truncate'
    ]
  },
  alias: {
    '@alicloudfe/components-console-page': '/src'
  },
  minify: false
} as UserConfig
