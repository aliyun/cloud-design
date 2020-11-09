/**
 * @title 无障碍
 * @description 通过Enter键点击`button`时，自动聚焦到`Message`上读取信息。请参考`ARIA and KeyBoard`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const showSuccess = () => Message.success('success')

export default function DemoComponent() {
  const content = (
    <div className="message-toast-quick-demo">
      <Button onClick={showSuccess}>success</Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
