/**
 * @title 精度
 * @description 通过 precision 控制小数点位数
 */

import * as React from 'react'
import styled from 'styled-components'

import { NumberPicker } from '@alife/alicloud-components'

function onChange(value) {
  console.log('changed', value)
}
function onCorrect(obj) {
  console.log(obj)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <NumberPicker
          defaultValue={-3.99}
          onChange={onChange}
          onCorrect={onCorrect}
          step={2}
          precision={2}
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
