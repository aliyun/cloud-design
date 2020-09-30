/**
 * @title 带徽标
 * @description 通常用于消息提示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Avatar, Badge } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <span style={{ marginRight: 24 }}>
          <Badge count={1}>
            <Avatar shape="square" icon="account" />
          </Badge>
        </span>
        <span>
          <Badge dot>
            <Avatar shape="square" icon="account" />
          </Badge>
        </span>
      </div>
    </Style>
  )
}
const Style = styled.div``
