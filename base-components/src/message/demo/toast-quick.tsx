/**
 * @title 弹窗便捷方法
 * @description 可以通过`Message.success`等静态方法来方便的显示指定类型的信息弹窗。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

const showSuccess = () => Message.success({ title: 'success', duration: 0})
const showWarning = () => Message.warning('warning')
const showError = () => Message.error('error')
const showNotice = () => Message.notice('notice')
const showHelp = () => Message.help('help')
const showLoading = () => Message.loading('loading')

export default function DemoComponent() {
  const content = (
    <div className="message-toast-quick-demo">
      <Button onClick={showSuccess}>success</Button>
      <Button onClick={showWarning}>warning</Button>
      <Button onClick={showError}>error</Button>
      <Button onClick={showNotice}>notice</Button>
      <Button onClick={showHelp}>help</Button>
      <Button onClick={showLoading}>loading</Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .message-toast-quick-demo .next-btn.next-medium {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`
