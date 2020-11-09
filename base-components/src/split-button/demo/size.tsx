/**
 * @title 尺寸
 * @description SplitButton 实际是上一个按钮组，通过 `size` 属性可以改变按钮组的大小。
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
      <SplitButton label="Edit Document" size="small">
        {menu}
      </SplitButton>{' '}
      &nbsp; &nbsp;
      <SplitButton label="Edit Document" size="medium">
        {menu}
      </SplitButton>{' '}
      &nbsp; &nbsp;
      <SplitButton label="Edit Document" size="large">
        {menu}
      </SplitButton>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
