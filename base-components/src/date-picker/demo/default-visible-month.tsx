/**
 * @title 面板的默认展现日期
 * @description 可以通过 `defaultVisibleMonth` 或 `defaultVisibleYear` 属性可以修改面板的默认展现日期。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker } from '@alife/alicloud-components'
import moment from 'moment'

const { RangePicker, MonthPicker } = DatePicker

function onVisibleMonthChange(val, reason) {
  console.log(val.format('L'), reason)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <p>Setting last month as default visible month</p>
        <DatePicker
          defaultVisibleMonth={() => moment().add(-1, 'months')}
          onVisibleMonthChange={onVisibleMonthChange}
        />
        <br />
        <br />
        <RangePicker
          defaultVisibleMonth={() => moment().add(-1, 'months')}
          onVisibleMonthChange={onVisibleMonthChange}
        />
        <br />
        <br />
        <p>Setting 2017 as default visible year</p>
        <MonthPicker defaultVisibleYear={() => moment('2017', 'YYYY')} />
      </div>
    </Style>
  )
}
const Style = styled.div``
