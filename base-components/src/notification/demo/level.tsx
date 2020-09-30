/**
 * @title 不同类型的通知框
 * @description `success`, `warning`, `error`, `notice`, `help` 类型的通知框
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alife/alicloud-components'

const openNotification = (type) => {
  Notification.open({
    title: 'Notification Title',
    content:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    type
  })
}

export default function DemoComponent() {
  return (
    <Style>
      <div className="button-row">
        <Button onClick={() => openNotification('success')}>success</Button>
        <Button onClick={() => openNotification('warning')}>warning</Button>
        <Button onClick={() => openNotification('error')}>error</Button>
        <Button onClick={() => openNotification('notice')}>notice</Button>
        <Button onClick={() => openNotification('help')}>help</Button>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .button-row .next-btn {
    margin-right: 10px;
  }
`
