/**
 * @title 嵌套组件
 * @description 使用 `RadioGroup`，通过直接嵌套 `Radio` 组件来渲染的组。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alife/alicloud-components'

const RadioGroup = Radio.Group

class NestApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 'orange'
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <label id="groupId">Choose fruit</label>
        <br />
        <RadioGroup
          value={this.state.value}
          onChange={this.onChange}
          aria-labelledby="groupId"
        >
          <Radio id="apple" value="apple">
            Apple
          </Radio>
          <Radio id="watermelon" value="watermelon">
            Watermelon
          </Radio>
          <Radio id="orange" value="orange">
            Orange
          </Radio>
        </RadioGroup>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <NestApp />
    </Style>
  )
}
const Style = styled.div``
