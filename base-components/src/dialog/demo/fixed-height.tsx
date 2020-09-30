/**
 * @title 定制底部按钮
 * @description 使用 'height' 道具设置 Dialog 高度风格。还将页尾底部的位置。
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
    const { visible } = this.state

    return (
      <div>
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog
          title="Fixed Height"
          visible={visible}
          height="400px"
          onOk={this.onClose}
          onCancel={this.onClose}
          onClose={this.onClose}
        >
          Small Content in a fixed size Dialog
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
