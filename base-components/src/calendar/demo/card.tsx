/**
 * @title 日历卡片
 * @description 可以将 `card` 形态的日历组件嵌套在宽高受限的容器中。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar } from '@alife/alicloud-components'

function onDateChange(value) {
  console.log(value)
}

export default function DemoComponent() {
  return (
    <Style>
      <div className="wrapped-calendar">
        <Calendar onSelect={onDateChange} shape="card" />
      </div>
    </Style>
  )
}
const Style = styled.div`
  .wrapped-calendar {
    width: 300px;
    border: 1px solid #c4c6cf;
    border-radius: 3px;
    padding: 8px;
  }
`
