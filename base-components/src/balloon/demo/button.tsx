/**
 * @title 含button样式
 * @description 右下角带按钮样式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Balloon } from '@alicloudfe/components'

const defaultTrigger = (
  <Button className="btrigger" style={{ margin: '5px' }}>
    default style
  </Button>
)
const Content = () => (
  <div>
    <h4 style={{ marginTop: 0 }}>balloon title</h4>
    <p>balloon content</p>
    <p>多段落的内容悬浮出现的气泡，相关的内容复杂，可以是一行，也可以是多行</p>
    <div style={{ marginTop: '16px',display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: '#A6A6A6', cursor: 'pointer' }}>查看更多</span>
      <Button type="normal">主要按钮</Button>
    </div>
  </div>
)

const Demo = () => (
  <div className="container">
    <Balloon trigger={defaultTrigger} closable={false} align="r">
      <Content/>
    </Balloon>
  </div>
)

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
