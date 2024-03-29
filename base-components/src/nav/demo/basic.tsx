/**
 * @title 顶部导航
 * @description 水平的顶部导航菜单，四种样式模式可选。可以通过 `noIcon` 显示/隐藏下拉展开按钮
 */

import * as React from 'react'
import styled from 'styled-components'

import { Nav } from '@alicloudfe/components'

const { Item, SubNav } = Nav

const header = <span className="fusion">FUSION</span>
const footer = (
  <a className="login-in" href="javascript:;">
    Login in
  </a>
)

export default function DemoComponent() {
  const content = (
    <Nav
      className="basic-nav"
      mode="popup"
      direction="hoz"
      type="primary"
      header={header}
      footer={footer}
      defaultSelectedKeys={['home']}
      triggerType="hover"
    >
      <Item key="home">Home</Item>
      <SubNav label="Component" noIcon>
        <SubNav label="Next">
          <Item key="next-design">Design</Item>
          <Item key="next-doc">Document</Item>
        </SubNav>
        <SubNav label="Meet">
          <Item key="meet-design">Design</Item>
          <Item key="meet-doc">Document</Item>
        </SubNav>
      </SubNav>
      <Item key="document">Document</Item>
    </Nav>
  )
  return <Style>{content}</Style>
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
`
