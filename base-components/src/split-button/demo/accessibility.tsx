/**
 * @title 无障碍
 * @description 为了使得屏幕阅读器能传达右侧按钮的含义，我们可以通过`triggerProps`传递对右侧按钮的`aria-label`描述，键盘操作请参考`ARIA and KeyBoard`。
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
      <SplitButton
        label="Edit Document"
        type="primary"
        triggerProps={{ 'aria-label': 'click to see more menu option' }}
      >
        {menu}
      </SplitButton>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
