/**
 * @title 尺寸
 * @description 可以通过 size 属性改变按钮大小。
 */

import * as React from 'react'
import styled from 'styled-components'

import { MenuButton } from '@alicloudfe/components'

const { Item } = MenuButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <MenuButton label="Edit Document" size="small">
          {menu}
        </MenuButton>{' '}
        &nbsp; &nbsp;
        <MenuButton label="Edit Document" size="medium">
          {menu}
        </MenuButton>{' '}
        &nbsp; &nbsp;
        <MenuButton label="Edit Document" size="large">
          {menu}
        </MenuButton>
      </div>
    </Style>
  )
}
const Style = styled.div``
