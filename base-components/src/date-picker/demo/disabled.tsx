/**
 * @title 禁用日期选择
 * @description 当开启 `disabled` 属性时，选择框处于完全禁用状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker } = DatePicker

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <DatePicker disabled />
        &nbsp;&nbsp;
        <RangePicker disabled />
      </div>
    </Style>
  )
}
const Style = styled.div``
