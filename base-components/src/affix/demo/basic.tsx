/**
 * @title 基本
 * @description 默认情况下，Affix 的默认目标容器元素是整个 `window`，并且 `offsetTop = 0`，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Affix, Button } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div className="custom-affix-wrapper">
      <Affix>
        <Button type="secondary">Affixed Button</Button>
      </Affix>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .custom-affix-wrapper {
    padding: 40px 0;
  }
`
