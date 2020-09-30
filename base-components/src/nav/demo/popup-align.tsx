/**
 * @title 对齐方式
 * @description 当 Nav 的 mode="popup" 时，popAlign 可控制弹出子导航的对齐方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav, Radio } from '@alife/alicloud-components'

const { Item, SubNav } = Nav

class App extends React.Component {
  state = {
    popupAlign: 'follow'
  }

  setValue(popupAlign) {
    this.setState({
      popupAlign
    })
  }

  render() {
    const { popupAlign } = this.state

    return (
      <div>
        <div className="demo-ctl">
          <Radio.Group
            shape="button"
            size="medium"
            value={popupAlign}
            onChange={this.setValue.bind(this)}
          >
            <Radio value="follow">popupAlign="follow"</Radio>
            <Radio value="outside">popupAlign="outside"</Radio>
          </Radio.Group>
        </div>
        <Nav
          style={{ height: 400, width: 240 }}
          mode="popup"
          popupAlign={popupAlign}
          defaultOpenKeys={['sub-nav-2']}
        >
          <SubNav key="sub-nav-1" label="Sub Nav 1">
            <Item key="1">Item 1</Item>
          </SubNav>
          <SubNav key="sub-nav-2" label="Sub Nav 2">
            <Item key="1">Item 1</Item>
            <Item key="2">Item 2</Item>
          </SubNav>
          <SubNav key="sub-nav-3" label="Sub Nav 3">
            <Item key="1">Item 1</Item>
            <Item key="2">Item 2</Item>
            <Item key="3">Item 3</Item>
          </SubNav>
          <SubNav key="sub-nav-4" label="Sub Nav 4">
            <Item key="1">Item 1</Item>
            <Item key="2">Item 2</Item>
            <Item key="3">Item 3</Item>
            <Item key="4">Item 4</Item>
          </SubNav>
        </Nav>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <App />
    </Style>
  )
}
const Style = styled.div`
  .demo-ctl {
    background-color: #f1f1f1;
    border-left: 4px solid #0d599a;
    color: #0a7ac3;
    margin-bottom: 20px;
    padding: 5px;
  }
  .demo-ctl .next-radio-group {
    margin: 5px;
  }
`
