/**
 * @title 形态
 * @description 根据使用场景及触发控件的类型，可以通过 `shape` 属性配置选项卡的类型，主要包括：
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

function onChange(key) {
  console.log(key)
}

const tabs = [
  { tab: 'Home', key: 'home', content: 'This is home page' },
  { tab: 'Document', key: 'doc', content: 'This is document page' },
  { tab: 'API', key: 'api', content: 'This is api page' },
  { tab: 'Repo', key: 'repo', content: 'This ia repo link' }
]

const shapes = ['pure', 'wrapped', 'text', 'capsule']

export default function DemoComponent() {
  const content = (
    <div className="fusion-demo">
      {shapes.map((shape) => (
        <div key={shape} className="fusion-demo-item">
          <Tab shape={shape} onChange={onChange}>
            {tabs.map((tab) => (
              <Tab.Item title={tab.tab} key={tab.key}>
                {tab.content}
              </Tab.Item>
            ))}
          </Tab>
        </div>
      ))}
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .fusion-demo-item {
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
