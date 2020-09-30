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
      '@alife/alicloud-components',
      'react-router-dom',
      '@alife/alicloud-components-fake-browser',
      'lodash.truncate',
      'prop-types',
      'classnames',
      '@alife/alicloud-components-truncate'
    ]
  },
  alias: {
    '@alife/alicloud-components-console-page': '/src'
  },
  minify: false
} as UserConfig
