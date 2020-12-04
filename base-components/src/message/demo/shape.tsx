/**
 * @title 信息外观
 * @description 通过设置`shape`调整信息外观
 */

import * as React from 'react'
import styled from 'styled-components'

import { Message, Radio } from '@alicloudfe/components'

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading']
const list = [
  {
    value: 'inline',
    label: 'inline'
  },
  {
    value: 'addon',
    label: 'addon'
  },
  {
    value: 'toast',
    label: 'toast'
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shape: 'inline'
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(shape) {
    this.setState({ shape })
  }

  render() {
    const { shape } = this.state

    return (
      <div className="message-shape-demo">
        <span className="demo-label">Select Shape：</span>
        <Radio.Group
          defaultValue="inline"
          dataSource={list}
          value={this.state.shape}
          onChange={this.handleSelect}
        />

        {types.map((type) => (
          <Message key={type} title={type} type={type} shape={shape} closeable={true}>
            Content Content Content Content
          </Message>
        ))}
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .message-shape-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 22px;
    line-height: 22px;
  }

  .message-shape-demo .next-message-title {
    text-transform: capitalize;
  }

  .message-shape-demo .next-message {
    margin-top: 10px;
  }

  .message-shape-demo .next-message.next-message-toast {
    position: relative !important;
  }
`
