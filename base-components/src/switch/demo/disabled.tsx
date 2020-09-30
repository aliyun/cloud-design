/**
 * @title 不可用
 * @description Switch 失效状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon, Switch } from '@alife/alicloud-components'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true
    }
  }

  toggle() {
    this.setState(
      Object.assign({}, this.state, {
        disabled: !this.state.disabled
      })
    )
  }

  render() {
    return (
      <div>
        <Switch
          checkedChildren={<Icon type="select" size="small" />}
          unCheckedChildren={<Icon type="close" size="small" />}
          disabled={this.state.disabled}
        />
        <Switch
          checkedChildren="on"
          unCheckedChildren="off"
          disabled={this.state.disabled}
        />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle.bind(this)}>
          Toggle disabled
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Test />
    </Style>
  )
}
const Style = styled.div``
