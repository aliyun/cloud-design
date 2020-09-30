/**
 * @title 大小
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <NumberPicker defaultValue={0} size="small" />
        <NumberPicker defaultValue={0} />
        <NumberPicker defaultValue={0} size="large" />
        <br />
        <br />
        <NumberPicker defaultValue={0} size="small" type="inline" />
        <NumberPicker defaultValue={0} type="inline" />
        <NumberPicker defaultValue={0} size="large" type="inline" />
      </div>
    </Style>
  )
}
const Style = styled.div`
  .next-number-picker {
    margin-right: 10px;
  }
`
