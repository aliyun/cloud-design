/**
 * @title 基本
 * @description 最简单的用法。支持 Button 的 shape, type, size, component, ghost 等属性透传。
 */

import * as React from 'react'
import styled from 'styled-components'

import { MenuButton } from '@alicloudfe/components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  const content = (
    <div>
      <MenuButton label="关联">{menu}</MenuButton>&nbsp;&nbsp;
      <MenuButton type="primary" label="是的是的">
        {menu}
      </MenuButton>
      &nbsp;&nbsp;
      <MenuButton type="secondary" label="Document Edit">
        {menu}
      </MenuButton>
      <br />
      <br />
      <MenuButton text label="Document Edit">
        {menu}
      </MenuButton>
      &nbsp;&nbsp;
      <MenuButton text type="primary" label="Document Edit">
        {menu}
      </MenuButton>
      &nbsp;&nbsp;
      <MenuButton text type="secondary" label="Document Edit">
        {menu}
      </MenuButton>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
