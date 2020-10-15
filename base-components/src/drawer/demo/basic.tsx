/**
 * @title 基本
 * @description 第一个抽屉
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Drawer } from '@alicloudfe/components'

class Demo extends React.Component {
  state = {
    visible: false
  }

  onOpen = () => {
    this.setState({
      visible: true
    })
  }

  onClose = (reason, e) => {
    console.log('onClose: ', reason, e)
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.onOpen}>
          {' '}
          open{' '}
        </Button>
        <Drawer
          width={440}
          title="标题"
          placement="right"
          visible={this.state.visible}
          onClose={this.onClose}
        >
          Start your business here by searching a popular product
        </Drawer>
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
