/**
 * @title 超长折叠
 * @description 在横向导航模式下，可通过设置 `hozInLine` 折叠超长内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Menu } from '@alicloudfe/components'

const { SubMenu, Item } = Menu

export default function DemoComponent() {
  const content = (
    <Menu
      hozInLine
      direction="hoz"
      mode="popup"
      className="my-hoz-menu"
      popupClassName="my-hoz-menu"
      popupAutoWidth
    >
      <Item key="1">First</Item>
      <Item key="2">Second</Item>
      <SubMenu label="Sub Nav">
        <Item key="sub-12">Sub option 1</Item>
        <Item key="sub-22">Sub option 2</Item>
        <SubMenu label="Sub Sub Nav">
          <Item key="sub-sub-122">Sub sub option 1</Item>
          <Item key="sub-sub-222">Sub sub option 2</Item>
        </SubMenu>
      </SubMenu>
      <SubMenu label="Sub Nav">
        <Item key="sub-1">Sub option 1</Item>
        <Item key="sub-2">Sub option 2</Item>
        <SubMenu label="Sub Sub Nav">
          <Item key="sub-sub-1">Sub sub option 1</Item>
          <Item key="sub-sub-2">Sub sub option 2</Item>
        </SubMenu>
      </SubMenu>
      <Item key="3">Third</Item>
    </Menu>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .my-hoz-menu .next-menu-item {
    width: 160px;
  }
  .my-hoz-menu .next-menu-item.next-menu-more {
    width: 60px;
  }
`
