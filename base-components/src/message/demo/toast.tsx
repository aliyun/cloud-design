/**
 * @title 弹窗用法
 * @description 可以通过`Message.show`和`Message.hide`方法来方便的显示或隐藏反馈弹窗。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const show = () => {
  Message.show({
    type: 'loading',
    content:
      'Will be closed after 3 seconds or manually click on the close button',
    afterClose: () => console.log('Closed the toast')
  })
}
const hide = () => Message.hide()

export default function DemoComponent() {
  return (
    <Style>
      <div className="message-toast-demo">
        <Button onClick={show}>Show</Button>
        <Button onClick={hide}>Hide</Button>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
  }
`
