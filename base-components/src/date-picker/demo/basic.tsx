/**
 * @title 基本用法
 * @description 最基本的用法。可以通过 `onChange` 监听选中值的变化。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alicloudfe/components'

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker
const onChange = (val) => console.log(val)

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <DatePicker onChange={onChange} defaultVisible /> <br />
        <br />
        <DatePicker showTime onChange={onChange} /> <br />
        <br />
        <MonthPicker onChange={onChange} /> <br />
        <br />
        <YearPicker onChange={onChange} /> <br />
        <br />
        <WeekPicker onChange={onChange} /> <br />
        <br />
        <RangePicker type="year" onChange={onChange} />
        <br />
        <br />
        <RangePicker type="month" onChange={onChange} />
        <br />
        <br />
        <RangePicker onChange={onChange} />
      </div>
    </Style>
  )
}
const Style = styled.div``
