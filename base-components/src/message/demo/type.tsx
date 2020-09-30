/**
 * @title 信息类型
 * @description 通过设置`type`调整信息类型
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div className="message-type-demo">
        <Message title="Success" type="success">
          Content Content Content Content
        </Message>
        <Message title="Warning" type="warning">
          Content Content Content Content
        </Message>
        <Message title="Error" type="error">
          Content Content Content Content
        </Message>
        <Message title="Notice" type="notice">
          Content Content Content Content
        </Message>
        <Message title="Help" type="help">
          Content Content Content Content
        </Message>
        <Message title="Loading" type="loading">
          Content Content Content Content
        </Message>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .message-type-demo .next-message {
    margin-bottom: 10px;
  }
`
