import React from 'react'
import RoutableMenu from '@alicloudfe/components-console-menu/RoutableMenu'
import { IRoutableItemDescriptor } from '@alicloudfe/components-console-menu'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloudfe/components-fake-browser'

const items: IRoutableItemDescriptor[] = [
  { key: '/home', to: '/', label: '首页' },
  { key: '/instance', to: '/instance', label: '实例概览' },

  // Defination as a sub menu
  {
    key: '/logs',
    label: '日志',
    items: [
      { key: '/pre', to: '/pre', label: '预发环境' },
      { key: '/prod', to: '/prod', label: '生产环境' },
    ],
  },
]

const Example = () => {
  return (
    <FakeBrowser>
      <div>
        <RoutableMenu
          defaultOpenKeys={['/logs']}
          header="阿里云控制台"
          items={items}
        />
      </div>
    </FakeBrowser>
  )
}

export default Example
