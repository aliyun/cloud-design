/**
 * @title 触发类型
 * @description Tab 支持 `click` 切换和 `hover` 切换两种触发类型，默认为 `click` 触发，您可以使用 `triggerType` 属性修改默认的触发类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

const tabs = [
  { tab: 'Home', key: 0, content: 'This is home page' },
  { tab: 'Document', key: 1, content: 'This is document page' },
  { tab: 'API', key: 2, content: 'This is api page' }
]

function onChange(key) {
  console.log('change', key)
}

function handleClick(key) {
  console.log('click', key)
}

function onMouseEnter(key, e) {
  console.log('enter', e.target, key)
}

function onMouseLeave(key, e) {
  console.log('leave', e.target, key)
}

export default function DemoComponent() {
  const content = (
    <div className="fusion-demo">
      <div className="demo-item-title">Click to change</div>
      <Tab triggerType="click" onChange={onChange}>
        {tabs.map((item) => (
          <Tab.Item key={item.key} title={item.tab} onClick={handleClick}>
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
      <div className="demo-item-title">Hover to change</div>
      <Tab triggerType="hover" onChange={onChange}>
        {tabs.map((item) => (
          <Tab.Item
            key={item.key}
            title={item.tab}
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {item.content}
          </Tab.Item>
        ))}
      </Tab>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .fusion-demo .demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 14px 0;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
