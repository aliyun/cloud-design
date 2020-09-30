/**
 * @title 基本
 * @description 最简单的使用方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav } from '@alife/alicloud-components'

const { Item, SubNav } = Nav

const header = <span className="fusion">FUSION</span>
const footer = (
  <a className="login-in" href="javascript:;">
    Login in
  </a>
)

export default function DemoComponent() {
  return (
    <Style>
      <Nav
        className="basic-nav"
        direction="hoz"
        type="primary"
        header={header}
        footer={footer}
        defaultSelectedKeys={['home']}
        triggerType="hover"
      >
        <Item key="home">Home</Item>
        <SubNav label="Component">
          <Item key="next">Next</Item>
          <Item key="mext">Mext</Item>
        </SubNav>
        <Item key="document">Document</Item>
      </Nav>
    </Style>
  )
}
const Style = styled.div`
  .basic-nav .fusion {
    margin: 8px 20px;
    width: 100px;
    color: #ffffff;
    font-size: 20px;
  }
  .basic-nav .login-in {
    margin: 0 20px;
    color: #ffffff;
  }
  .basic-nav .next-nav-item {
    width: 120px;
  }
`
