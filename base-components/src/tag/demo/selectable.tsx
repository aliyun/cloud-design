/**
 * @title 可选中标签
 * @description `Tag.Selectable` 可以用于一些轻量的需要选中状态的场景，可作为 checkbox 使用。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag } from '@alife/alicloud-components'

const { Group: TagGroup, Selectable: SelectableTag } = Tag
const dataSource = [
  'selectable tag',
  'I like orange',
  'small tag',
  'disabled',
  'disabled & checked'
]

class Demo extends React.Component {
  state = {
    value: ['I like orange', 'disabled & checked'],
    singleValue: 'selectable tag'
  }

  handleChange(name, checked) {
    const { value } = this.state
    const next = checked ? [...value, name] : value.filter((n) => n !== name)

    this.setState({ value: next })
  }

  handleChangeSingle(name, checked) {
    const { singleValue } = this.state
    const next = checked ? name : ''

    this.setState({ singleValue: next })
  }

  renderTagList(props) {
    const { value } = this.state

    return dataSource.map((name, i) => (
      <SelectableTag
        key={name}
        checked={value.indexOf(name) > -1}
        disabled={i > 2}
        size={i === 2 ? 'small' : undefined}
        onChange={this.handleChange.bind(this, name)}
        {...props}
      >
        {name}
      </SelectableTag>
    ))
  }

  renderTagListSingle(props) {
    const { singleValue } = this.state

    return dataSource.map((name, i) => (
      <SelectableTag
        key={name}
        checked={singleValue === name}
        disabled={i > 2}
        size={i === 2 ? 'small' : undefined}
        onChange={this.handleChangeSingle.bind(this, name)}
        {...props}
      >
        {name}
      </SelectableTag>
    ))
  }

  render() {
    return (
      <div className="tag-list">
        <h4>type: 'default'</h4>
        <TagGroup>{this.renderTagList({ type: 'normal' })}</TagGroup>
        <h4>type: 'primary'</h4>
        <TagGroup>{this.renderTagList({ type: 'primary' })}</TagGroup>
        <h4>Controlled Tags: Only one selected at a time</h4>
        <TagGroup>{this.renderTagListSingle({ type: 'normal' })}</TagGroup>
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
