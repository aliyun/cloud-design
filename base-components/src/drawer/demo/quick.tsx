/**
 * @title 快捷调用
 * @description `Drawer` 提供 `alert` 和 `confirm` 的快掉调用方式，以及更底层的 `show` 方式。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Drawer, ConfigProvider, Box, Message } from '@alicloudfe/components'
import { quickShowDrawerProps } from '../../../types/drawer'

let onHideA = null
let onHideB = null

const DrawerAProps: quickShowDrawerProps = {
  title: 'AlertA',
  size: 'small',
  onOk: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    })
  },
  onCancel: () => {
    alert('click cancel')
    return true
  },
  content: (
    <>
      <Button
        onClick={() => {
          onHideA?.()
        }}
      >
        Hide
      </Button>
      <br />
      <br />
      <Button
        type="primary"
        onClick={() => {
          const { hide } = Drawer.show(DrawerBProps)
          onHideB = hide
        }}
      >
        Open Drawer B
      </Button>
    </>
  )
}

const DrawerBProps: quickShowDrawerProps = {
  title: 'AlertB',
  size: 'mini',
  onOk: () => {
    return true
  },
  onCancel: () => {
    alert('click cancel')
    return true
  },
  content: (
    <Button
      onClick={() => {
        onHideB?.()
      }}
    >
      Hide B
    </Button>
  )
}

const popupShow = () => {
  const { hide, show } = Drawer.show(DrawerAProps)
  onHideA = hide
}

export default function DemoComponent() {
  const content = (
    <ConfigProvider locale={{ Dialog: { ok: 'OK', cancel: 'Cancel' } }}>
      <Box direction="row" spacing={20}>
        <Button onClick={popupShow} type="primary">
          Show
        </Button>
      </Box>
    </ConfigProvider>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
