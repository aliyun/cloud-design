/**
 * @title 范围选择
 * @description 指定范围选择器类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { DatePicker2 } from '@alicloudfe/components'

const { RangePicker } = DatePicker2

const onChange = (date, dateStr) => console.log(date, dateStr)

const App = () => (
  <div className="app">
    <div>
      <RangePicker onChange={onChange} />
    </div>
    <div>
      <RangePicker
        placeholder={['开始月', '结束月']}
        mode="month"
        onChange={onChange}
      />
    </div>
    <div>
      <RangePicker
        placeholder={['开始年', '结束年']}
        mode="year"
        onChange={onChange}
      />
    </div>
    <div>
      <RangePicker
        placeholder={['开始周', '结束周']}
        mode="week"
        onChange={onChange}
      />
    </div>
    <div>
      <RangePicker
        placeholder={['开始季度', '结束季度']}
        mode="quarter"
        onChange={onChange}
      />
    </div>
  </div>
)

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
