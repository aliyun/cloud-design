/**
 * @title 受控开关
 * @description 受控开关, 是指组件的值由上层组件决定, 如果开关定义了 `value` 属性, 就表示此开关是受控开关.
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch } from '@alife/alicloud-components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(checked) {
    this.setState({ checked })
  }

  render() {
    return (
      <div>
        <div className="line">
          value of switch: {this.state.checked ? 'true' : 'false'}
        </div>
        <div className="line">
          <Switch checked={this.state.checked} onChange={this.onChange} />
          <Switch
            checked={this.state.checked}
            onChange={this.onChange}
            disabled
          />
        </div>
      </div>
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
const Style = styled.div`
  .line {
    margin-bottom: 10px;
  }
  .next-switch {
    margin-right: 20px;
  }
`
