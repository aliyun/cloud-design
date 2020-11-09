/**
 * @title 基本
 * @description 最简单的用法。支持 Button 的 type, size, component, ghost 等属性透传。
 */

import * as React from 'react'
import styled from 'styled-components'

import { SplitButton } from '@alicloudfe/components'

const { Item } = SplitButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

export default function DemoComponent() {
  const content = (
    <div>
      <SplitButton label="Edit Document">{menu}</SplitButton> &nbsp; &nbsp;
      <SplitButton label="Edit Document" type="primary">
        {menu}
      </SplitButton>
      &nbsp;&nbsp;
      <SplitButton label="Edit Document" type="secondary">
        {menu}
      </SplitButton>
      <br />
      <br />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
