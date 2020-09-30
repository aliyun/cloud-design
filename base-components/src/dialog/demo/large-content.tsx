/**
 * @title 内容较多的对话框
 * @description 当对话框高度超过浏览器视口高度时，默认会让对话框 Body 区域出现滚动条，以保证底部按钮可以直接出现在视口内，方便操作，如果你想不想出现滚动条，而是展示对话框内所有内容，请设置 isFullScreen 为 true。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch, Button, Dialog } from '@alicloudfe/components'

const largeContent = new Array(30).fill(
  <p>Start your business here by searching a popular product</p>
)

class Demo extends React.Component {
  state = {
    visible: false,
    isFullScreen: false,
    closeOnMaskClick: false
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

  toggleIsFullScreen = () => {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }

  toggleCloseOnMaskClick = () => {
    this.setState({
      closeOnMaskClick: !this.state.closeOnMaskClick
    })
  }

  render() {
    const { visible, isFullScreen, closeOnMaskClick } = this.state

    return (
      <div>
        <div style={{ display: 'block', marginBottom: '10px' }}>
          When the height of the dialog exceeds the viewport height of the
          browser, whether to show the scroll bar:
        </div>
        <Switch
          style={{ display: 'block', marginBottom: '10px' }}
          checked={isFullScreen}
          onChange={this.toggleIsFullScreen}
        />
        <div style={{ display: 'block', marginBottom: '10px' }}>
          Close on mask click:
        </div>
        <Switch
          style={{ display: 'block', marginBottom: '10px' }}
          checked={closeOnMaskClick}
          onChange={this.toggleCloseOnMaskClick}
        />
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog
          title="Welcome to Alibaba.com"
          visible={visible}
          isFullScreen={isFullScreen}
          closeable={closeOnMaskClick ? 'close,esc,mask' : 'close,esc'}
          onOk={this.onClose}
          onCancel={this.onClose}
          onClose={this.onClose}
        >
          {largeContent}
        </Dialog>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div``
