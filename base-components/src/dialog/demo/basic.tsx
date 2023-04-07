/**
 * @title 基本
 * @description 基本用法，打开和关闭。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Dialog, Form, Input, Message } from '@alicloudfe/components'

const FormItem = Form.Item

class Demo extends React.Component {
  state = {
    visible: false,
    quickVisible: false,
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onOpenQuick = () => {
    this.setState({
      quickVisible: true
    })
  }

  onClose = (reason) => {
    console.log(reason)

    this.setState({
      visible: false
    })
  }

  onCloseQuick = (reason) => {
    console.log(reason)

    this.setState({
      quickVisible: false
    })
  }

  render() {
    const theme = window
      .getComputedStyle?.(window.document.body)
      .getPropertyValue('--alicloudfe-components-theme')
      .trim()

    return (
      <div style={{ display: 'flex', gap: 20 }}>
        <Button onClick={this.onOpen} type="primary">
          Open dialog
        </Button>
        <Dialog
          title="Welcome to Alibaba.com"
          extra={<Button text>如何创建安全组</Button>}
          visible={this.state.visible}
          onOk={this.onClose.bind(this, 'okClick')}
          onCancel={this.onClose.bind(this, 'cancelClick')}
          onClose={this.onClose}
          size="large"
          sidebar={<>side bar</>}
        >
          Start your business here by searching a popular product
        </Dialog>
        {theme === 'yunxiao-v5' && (
          <>
            <Button onClick={this.onOpenQuick} type="primary">
              快捷调用
            </Button>
            <Dialog
              quickShow
              title="Welcome to Alibaba.com"
              extra={<Button text>如何创建安全组</Button>}
              visible={this.state.quickVisible}
              onOk={this.onCloseQuick.bind(this, 'okClick')}
              onCancel={this.onCloseQuick.bind(this, 'cancelClick')}
              onClose={this.onCloseQuick}
              messageProps={{
                type: 'warning'
              }}
            >
              Start your business here by searching a popular product
            </Dialog>
          </>
        )}
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
