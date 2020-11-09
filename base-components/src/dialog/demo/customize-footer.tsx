/**
 * @title 自定义底部
 * @description 默认的 footer 为确定取消两个按钮，你可以自定义 footer 的内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Dialog } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    visible: false
  }

  onOpenFullyCustomized = () => {
    this.setState({
      fullyCustomizedVisible: true
    })
  }

  onCloseFullyCustomized = () => {
    this.setState({
      fullyCustomizedVisible: false
    })
  }

  onOpenTextCustomized = () => {
    this.setState({
      textCustomizedVisible: true
    })
  }

  onCloseTextCustomized = () => {
    this.setState({
      textCustomizedVisible: false
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.onOpenFullyCustomized} type="primary">
          Fully Customized Footer
        </Button>{' '}
        &nbsp;
        <Dialog
          title="Welcome to Alibaba.com"
          footer={
            <Button
              warning
              type="primary"
              onClick={this.onCloseFullyCustomized}
            >
              Customize footer
            </Button>
          }
          visible={this.state.fullyCustomizedVisible}
          onOk={this.onCloseFullyCustomized}
          onCancel={this.onCloseFullyCustomized}
          onClose={this.onCloseFullyCustomized}
        >
          Start your business here by searching a popular product
        </Dialog>
        <Button onClick={this.onOpenTextCustomized} type="primary">
          Text Only Customize
        </Button>
        <Dialog
          title="Welcome to Alibaba.com"
          visible={this.state.textCustomizedVisible}
          onOk={this.onCloseTextCustomized}
          onCancel={this.onCloseTextCustomized}
          onClose={this.onCloseTextCustomized}
          okProps={{ children: 'Custom OK', className: 'asdf' }}
          cancelProps={{ children: 'Custom Cancel' }}
        >
          Start your business here by searching a popular product
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
