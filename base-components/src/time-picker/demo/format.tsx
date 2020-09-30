/**
 * @title 时间格式
 * @description 可以通过 `format` 属性格式化时间值，此外该属性还会影响到时间列的展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TimePicker } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <TimePicker format="HH" />
        <p>Hide seconds</p>
        <TimePicker format="HH:mm" />
        <p>Hide hours</p>
        <TimePicker format="mm:ss" />
      </div>
    </Style>
  )
}
const Style = styled.div``
