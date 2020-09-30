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
      'react-router-dom'
    ]
  },
  alias: {
    '@alife/alicloud-components-fake-browser': '/src'
  },
  minify: false
} as UserConfig
