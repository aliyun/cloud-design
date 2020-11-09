/**
 * @title Checkbox嵌套使用
 * @description 使用 `CheckboxGroup`，通过直接嵌套 `Checkbox` 组件来渲染的组。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

const { Group: CheckboxGroup } = Checkbox

class NestApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ['orange']
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(selectedItems) {
    this.setState({
      value: selectedItems
    })
  }

  render() {
    return (
      <div>
        <CheckboxGroup value={this.state.value} onChange={this.onChange}>
          <Checkbox id="apple" value="apple" disabled>
            Apple
          </Checkbox>
          <Checkbox id="watermelon" value="watermelon">
            Watermelon
          </Checkbox>
          <Checkbox id="orange" value="orange">
            Orange
          </Checkbox>
        </CheckboxGroup>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <NestApp />
  return <Style>{content}</Style>
}
const Style = styled.div``
