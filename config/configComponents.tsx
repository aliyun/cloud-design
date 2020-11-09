import React from 'react'
export * from '@alicloudfe/components'

import { ConfigProvider } from '@alicloudfe/components'

import '@alicloudfe/components/dist/xconsole.css?fusionPrefix=.xdemo-'

/**
 * 额外提供 ConfigWrapper 组件，用来配置fusion前缀
 */
export const ConfigWrapper = ({ children }) => {
  return (
    <ConfigProvider prefix="xdemo-">
      <>{children}</>
    </ConfigProvider>
  )
}
