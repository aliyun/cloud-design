/**
 * @title 自定义选项卡
 * @description Tab 支持使用 `tabRender` 属性返回自定义组件作为选项卡内容，注意该属性接收函数作为属性值。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab } from '@alicloudfe/components'

function CustomTabItem({ title, desc }) {
  return (
    <div className="custom-tab-item">
      <div className="tab-title">{title}</div>
      <div className="tab-desc">{desc}</div>
    </div>
  )
}

const panes = [
  { key: 'e-checking', title: 'Alipay', desc: 'The fee to be paid is $15' },
  { key: 'brand-card', title: 'Bank Card', desc: 'The fee to be paid is $17' }
]

export default function DemoComponent() {
  return (
    <Style>
      <Tab
        shape="wrapped"
        tabRender={(key, props) => <CustomTabItem key={key} {...props} />}
      >
        {panes.map((pane) => (
          <Tab.Item key={pane.key} {...pane} tabStyle={{ height: '60px' }}>
            {pane.desc}
          </Tab.Item>
        ))}
      </Tab>
    </Style>
  )
}
const Style = styled.div`
  .custom-tab-item {
    padding: 10px;
  }

  .tab-title {
    font-size: 20px;
  }
  .tab-desc {
    margin: 10px 0 0 0;
    font-size: 12px;
  }
  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
