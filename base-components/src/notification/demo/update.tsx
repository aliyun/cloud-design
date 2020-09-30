/**
 * @title 更新通知内容
 * @description 可以通过唯一的 key 来更新内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Notification, Button } from '@alife/alicloud-components'

const key = 'updatable'

const openNotification = () => {
  Notification.open({
    key,
    title: 'Notification Title',
    content: 'description.'
  })
  setTimeout(() => {
    Notification.open({
      key,
      title: 'New Title',
      content: 'New description.'
    })
  }, 1000)
}

export default function DemoComponent() {
  return (
    <Style>
      <Button type="primary" onClick={openNotification}>
        Open Notification
      </Button>
    </Style>
  )
}
const Style = styled.div``
