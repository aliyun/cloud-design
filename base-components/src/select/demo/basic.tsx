/**
 * @title 基本使用
 * @description 简单
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const Option = Select.Option

const onChange = function (value) {
  console.log(value)
}

const onToggleHighlightItem = function (item, type) {
  console.log(item, type)
}

const onFocus = () => {
  console.log('focus')
}

const onBlur = () => {
  console.log('blur')
}

export default function DemoComponent() {
  return (
    <Style>
      <Select
        id="basic-demo"
        onChange={onChange}
        onToggleHighlightItem={onToggleHighlightItem}
        defaultValue="jack"
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label="name is"
      >
        <Option value="jack">Jack</Option>
        <Option value="frank">Frank</Option>
        <Option value="hugo">Hugo</Option>
      </Select>
    </Style>
  )
}
const Style = styled.div``
