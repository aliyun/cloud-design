/**
 * @title 基本
 * @description 简单的徽章展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Badge count={5}>
        <a href="#" className="basic-example"></a>
      </Badge>

      <Badge count={5}>
        <a href="#" className="basic-example">
          <span className="next-sr-only">unread messages</span>
        </a>
      </Badge>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .basic-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }

  .next-badge {
    margin-right: 16px;
  }
`
