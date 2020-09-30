/**
 * @title 非受限组件
 * @description 使用 `RadioGroup` 渲染的组，通过设置 `defaultValue` 属性可以让组件变成[非受限组件](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alife/alicloud-components'

const RadioGroup = Radio.Group

const list = [
  {
    value: 'apple',
    label: 'Apple',
    disabled: false
  },
  {
    value: 'pear',
    label: 'Pear',
    disabled: true
  },
  {
    value: 'orange',
    label: 'Orange'
  }
]

const UnControlApp = () => {
  return (
    <div>
      <RadioGroup dataSource={list} defaultValue={'apple'} />
    </div>
  )
}

export default function DemoComponent() {
  return (
    <Style>
      <UnControlApp />
    </Style>
  )
}
const Style = styled.div``
