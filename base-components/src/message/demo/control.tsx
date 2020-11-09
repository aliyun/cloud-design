/**
 * @title 受控显示隐藏
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Button } from '@alicloudfe/components'

class App extends React.Component {
  state = {
    visible: true
  }

  handleChange = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  handleClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state

    return (
      <div className="control-demo">
        <Button onClick={this.handleChange}>Toggle Visible</Button>
        <Message
          type="warning"
          visible={visible}
          title="Warning"
          closeable
          onClose={this.handleClose}
        >
          This item already has the label "travel". You can add a new label.
        </Message>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .control-demo .next-btn.next-medium {
    margin-bottom: 10px;
  }
`
