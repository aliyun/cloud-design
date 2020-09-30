/**
 * @title 复杂菜单
 * @description 支持菜单组和菜单分割线，使用方法同 `Menu.Group`, `Menu.Item`, `Menu.Divider`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { SplitButton } from '@alicloudfe/components'

const { Item, Group, Divider } = SplitButton

export default function DemoComponent() {
  return (
    <Style>
      <SplitButton
        label="Edit Document"
        onItemClick={(key) => console.log(key)}
      >
        <Item>Undo</Item>
        <Item>Redo</Item>
        <Divider />
        <Group>
          <Item helper="CTRL + X">Cut</Item>
          <Item helper="CTRL + C">Copy</Item>
          <Item helper="CTRL + V">Paste</Item>
        </Group>
      </SplitButton>
    </Style>
  )
}
const Style = styled.div``
