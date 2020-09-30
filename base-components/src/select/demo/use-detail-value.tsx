/**
 * @title 对象数据
 * @description `useDetailValue` 把 `value` 从字符串变成对象
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true },
  {
    label: 'Special Group',
    children: [
      { value: new Date(), label: 'new Date()' },
      { value: false, label: 'FALSE' },
      { value: 0, label: 'ZERO' }
    ]
  }
]

function handleChange(value) {
  console.log(value)
}

export default function DemoComponent() {
  return (
    <Style>
      <Select
        useDetailValue
        defaultValue={{ value: '10001', label: 'Lucy King' }}
        onChange={handleChange}
        dataSource={dataSource}
        style={{ width: 150 }}
      />
    </Style>
  )
}
const Style = styled.div``
