/**
 * @title 基本
 * @description 第一个对话框
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

  onClose = (reason) => {
    console.log(reason)

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
          onOk={this.onClose.bind(this, 'okClick')}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}
        >
          {/* Start your business here by searching a popular product */}
          <div style={{ width: '520px', height: '252px', background: '#D9D9D9' }}></div>
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
