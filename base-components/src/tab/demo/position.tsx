/**
 * @title 位置
 * @description 包裹型选项卡支持通过 `tabPosition` 属性设置选项卡的位置，支持 `top | right | bottom | left` 四个方向。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab, Select } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    position: 'top'
  }

  changePosition = (val) => {
    this.setState({
      position: val
    })
  }

  render() {
    return (
      <div>
        <Select
          onChange={this.changePosition}
          placeholder="Choose Positon of Tab"
        >
          {['top', 'bottom', 'left', 'right'].map((item) => (
            <Select.Option value={item} key={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
        <br />
        <br />
        <Tab
          tabPosition={this.state.position}
          shape="wrapped"
          contentClassName="custom-tab-content"
        >
          <Tab.Item title="Tab 1" key="1">
            Tab 1 Content
          </Tab.Item>
          <Tab.Item title="Tab 2" key="2">
            Tab 2 Content
          </Tab.Item>
          <Tab.Item title="Tab 3" key="3">
            Tab 3 Content
          </Tab.Item>
        </Tab>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div`
  .custom-tab-content {
    min-height: 50px;
  }

  .next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
  }
`
