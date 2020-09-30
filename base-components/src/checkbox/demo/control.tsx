/**
 * @title 受限组件
 * @description 使用 `CheckboxGroup` 渲染的组，通过设置 `value` 属性可以让组件变成[受限组件](https://facebook.github.io/react/docs/forms.html#controlled-components)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alife/alicloud-components'

const { Group: CheckboxGroup } = Checkbox
const list = [
  {
    value: 'apple',
    label: 'Apple'
  },
  {
    value: 'pear',
    label: 'Pear'
  },
  {
    value: 'orange',
    label: 'Orange'
  }
]

class ControlApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ['orange']
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(selectedItems) {
    console.log('onChange callback', selectedItems)
    this.setState({
      value: selectedItems
    })
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <CheckboxGroup
          value={this.state.value}
          dataSource={list}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <ControlApp />
    </Style>
  )
}
const Style = styled.div``
