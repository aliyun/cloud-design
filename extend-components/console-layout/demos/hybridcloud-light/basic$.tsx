import { HybridCloudLightTheme as MenuTheme } from '@alicloudfe/components-console-menu'
import { HybridCloudLightTheme } from '@alicloudfe/components-console-layout'

import Basic from '../basic/2$'

import React from 'react'

interface IProps {}

const Demo: React.FC<IProps> = props => {
  return (
    <HybridCloudLightTheme>
      <MenuTheme>
        <Basic />
      </MenuTheme>
    </HybridCloudLightTheme>
  )
}

export default Demo
