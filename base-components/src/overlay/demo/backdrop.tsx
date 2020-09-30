/**
 * @title 遮罩
 * @description 带有遮罩的弹层。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay } from '@alife/alicloud-components'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  onClick = () => {
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
        <button
          onClick={this.onClick}
          ref={(ref) => {
            this.btn = ref
          }}
        >
          Open
        </button>
        <Overlay
          visible={this.state.visible}
          safeNode={() => this.btn}
          align="cc cc"
          hasMask
          disableScroll
          onRequestClose={this.onClose}
        >
          <span className="overlay-demo">Hello World From Overlay!</span>
        </Overlay>
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
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`
