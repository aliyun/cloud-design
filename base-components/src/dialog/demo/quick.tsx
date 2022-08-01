/**
 * @title 快捷调用
 * @description `Dialog` 提供 `alert` 和 `confirm` 的快掉调用方式，以及更底层的 `show` 方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import {
  Button,
  Dialog,
  ConfigProvider,
  Box,
  Message
} from '@alicloudfe/components'

const popupAlert = () => {
  Dialog.alert({
    title: 'Alert',
    content: <Message type="notice">alert content alert content...</Message>,
    okProps: { children: 'Custom OK' },
    style: { width: 1000 },
    onOk: () => console.log('ok')
  })
}

const popupModerateAlert = () => {
  Dialog.moderateAlert({
    title: 'Moderate Alert',
    onOk: () => console.log('ok')
  })
}

const popupSevereAlert = () => {
  Dialog.severeAlert({
    title: 'Severe Alert',
    onOk: () => console.log('ok')
  })
}

const popupError = () => {
  Dialog.error({
    title: 'Error',
    content: 'errpr content alert content...',
    onOk: () => console.log('ok')
  })
}

const popupSuccess = () => {
  Dialog.success({
    title: 'Success',
    content: 'Success content alert content...',
    onOk: () => console.log('ok')
  })
}

const popupConfirm = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'confirm content confirm content...',
    style: { width: 1000 },
    okProps: {
      loading: true
    },
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel')
  })
}

const popupShow = () => {
  const dialog = Dialog.show({
    title: 'Custom',
    content: 'custom content custom content...',
    footer: (
      <Button warning type="primary" onClick={() => dialog.hide()}>
        Custom button
      </Button>
    )
  })
}

const popupCustom = () => {
  const dialog = Dialog.show({
    title: 'Custom',
    content: 'custom content custom content...',
    type: 'confirm',
    style: { width: 1000 },
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel')
  })
}

const popupCustomIcon = () => {
  Dialog.confirm({
    title: 'Confirm',
    content: 'set icon as "warning" ',
    messageProps: {
      type: 'warning'
    },
    onOk: () => console.log('ok'),
    onCancel: () => console.log('cancel')
  })
}

export default function DemoComponent() {
  const content = (
    <ConfigProvider locale={{ Dialog: { ok: 'OK', cancel: 'Cancel' } }}>
      <Box direction="row" spacing={20}>
        <Button onClick={popupAlert}>Alert</Button>
        <Button onClick={popupModerateAlert}>Moderate Alert</Button>
        <Button onClick={popupSevereAlert}>Severe Alert</Button>
        <Button onClick={popupError}>Error</Button>
        <Button onClick={popupSuccess}>Success</Button>
        <Button onClick={popupConfirm}>Confirm</Button>
        <Button onClick={popupShow}>Show</Button>
        <Button onClick={popupCustomIcon}>Custom Icon</Button>
        <Button onClick={popupCustom}>show error</Button>
      </Box>
    </ConfigProvider>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
