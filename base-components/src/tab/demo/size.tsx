/**
 * @title 尺寸
 * @description 组件尺寸，可以通过`size`属性设置，提供`medium`(默认)和`small`两种尺寸，
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

const tabs = [
  { tab: 'Home', key: 'home', content: 'This is home page' },
  { tab: 'Document', key: 'doc', content: 'This is document page' },
  { tab: 'API', key: 'api', content: 'This is api page' }
]

export default function DemoComponent() {
  const content = (
    <div>
      <Tab size="small">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <Tab size="small" shape="wrapped">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <Tab size="small" shape="text">
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <br />
      <Tab size="small" shape="capsule">
        {tabs.map((item) => (
          <Tab.TabPane key={item.key} title={item.tab}>
            {item.content}
          </Tab.TabPane>
        ))}
      </Tab>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
