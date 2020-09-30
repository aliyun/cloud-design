/**
 * @title 不可用
 * @description 不可用的 number picker。
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <NumberPicker defaultValue={0} disabled />
        <br />
        <br />
        <NumberPicker defaultValue={0} type="inline" disabled />
      </div>
    </Style>
  )
}
const Style = styled.div``
