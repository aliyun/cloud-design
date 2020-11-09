import React from 'react'
import * as c from '@alicloudfe/components'

export default ({ children }) => {
  // 如果有ConfigWrapper，说明是configComponents提供的修改前缀工具
  // @ts-ignore
  if (c.ConfigWrapper) {
    // @ts-ignore
    return <c.ConfigWrapper>{children}</c.ConfigWrapper>
  }
  return children
}
