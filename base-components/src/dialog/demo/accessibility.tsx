/**
 * @title 无障碍支持
 * @description 通过`okProps`与`cancelProps`设置`aria-label`属性，屏幕阅读器读取确定和取消按钮。关于键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Dialog } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    visible: false
  }
  onOpen = () => {
    this.setState({
      visible: true
    })
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog
          title="Welcome to Alibaba.com"
          visible={this.state.visible}
          autoFocus
          onOk={this.onClose.bind(this, 'okClick')}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}
          cancelProps={{ 'aria-label': 'cancel' }}
          okProps={{ 'aria-label': 'ok' }}
        >
          <p tabIndex="0">
            {' '}
            Start your business here by searching a popular product
          </p>
        </Dialog>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
