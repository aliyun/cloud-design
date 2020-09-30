/**
 * @title 全屏
 * @description 全屏展示
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading, Button } from '@alicloudfe/components'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      visible: false
    }
  }

  onClick() {
    this.setState({ visible: !this.state.visible })
  }

  onClose = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <span>
        <Loading
          visible={this.state.visible}
          fullScreen
          shape="fusion-reactor"
          safeNode={this.btn}
          onVisibleChange={this.onClose.bind(this)}
        >
          <Button
            onClick={this.onClick.bind(this)}
            ref={(ref) => (this.btn = ref)}
          >
            Full Screen
          </Button>
        </Loading>
      </span>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <App />
    </Style>
  )
}
const Style = styled.div``
