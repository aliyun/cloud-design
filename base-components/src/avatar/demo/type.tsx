/**
 * @title 多种类型
 * @description 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Avatar, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Avatar icon="account" />
      <Avatar icon={<Icon type="account" />} />
      <Avatar>U</Avatar>
      <Avatar src="https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png" />
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        U
      </Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon="account" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-avatar {
    margin-right: 12px;
  }
`
