/**
 * @title 按需加载和自动卸载
 * @description 默认情况 Tab 不会提前渲染好所有的内容，而是根据 Tab 的激活情况依次进行渲染。某些时候，如果你想一次渲染好所有内容，可以设置 `lazyLoad={false}` 进行关闭。此外，某些时候，如果你想每次切换选项卡时自动卸载未激活的 Tab，可以设置 `unmountInactiveTabs` 开启。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alife/alicloud-components'

const tabs = [
  { tab: 'Home', key: 0, content: 'This is home page' },
  { tab: 'Document', key: 1, content: 'This is document page' },
  { tab: 'API', key: 2, content: 'This is api page' }
]

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <div>Render all tab contents</div>
        <Tab lazyLoad={false}>
          {tabs.map((item) => (
            <Tab.Item key={item.key} title={item.tab}>
              {item.content}
            </Tab.Item>
          ))}
        </Tab>

        <div>Unmount inactive tabs</div>
        <Tab unmountInactiveTabs>
          {tabs.map((item) => (
            <Tab.Item key={item.key} title={item.tab}>
              {item.content}
            </Tab.Item>
          ))}
        </Tab>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
