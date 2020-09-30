/**
 * @title 只读模式
 * @description 设置 `disabled` 属性后，评分组件仅展示模式，不可选择。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <Rating defaultValue={3.2} disabled />
    </Style>
  )
}
const Style = styled.div``
