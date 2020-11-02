import { HybridCloudDarkTheme as MenuTheme } from '@alicloudfe/components-console-menu'
import { HybridCloudDarkTheme } from '@alicloudfe/components-console-layout'

import Basic from '../basic/2$'

import React from 'react'

interface IProps {}

const Demo: React.FC<IProps> = props => {
  return (
    <HybridCloudDarkTheme>
      <MenuTheme>
        <Basic />
      </MenuTheme>
    </HybridCloudDarkTheme>
  )
}

export default Demo
