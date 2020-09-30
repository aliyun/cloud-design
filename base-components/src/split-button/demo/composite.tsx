/**
 * @title 复合使用
 * @description 复合使用菜单，监听菜单行为。
 */

import * as React from 'react'
import styled from 'styled-components'

import { SplitButton } from '@alife/alicloud-components'

const { Item } = SplitButton
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map((item) => (
  <Item key={item}>{item}</Item>
))

class CompositeSplitButton extends React.Component {
  state = {
    visible: false,
    label: 'Choose Action'
  }

  onSelect = (val) => {
    this.setState({
      visible: false,
      label: val
    })
  }

  changeVisible = (visible) => {
    this.setState({
      visible
    })
  }

  render() {
    const { visible, label } = this.state
    return (
      <SplitButton
        label={label}
        visible={visible}
        onVisibleChange={this.changeVisible}
        onItemClick={this.onSelect}
      >
        {menu}
      </SplitButton>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <CompositeSplitButton />
    </Style>
  )
}
const Style = styled.div``
