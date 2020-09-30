import type { UserConfig } from 'vite'
import * as vpr from 'vite-plugin-react'
import pages from 'vite-plugin-react-pages'
import mdx from 'vite-plugin-mdx'

module.exports = {
  jsx: 'react',
  plugins: [vpr, mdx(), pages('demos')],
  optimizeDeps: {
    include: ['styled-components', '@alife/alicloud-components', 'react-router-dom', '@alife/alicloud-components-fake-browser', 'prop-types']
  },
  alias: {
    '@alife/alicloud-components-console-menu': '/src',
    '@alife/alicloud-components-console-menu/RoutableMenu': '/src/RoutableMenu'
  },
  minify: false
} as UserConfig
