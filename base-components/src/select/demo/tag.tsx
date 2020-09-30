/**
 * @title 标签
 * @description 标签模式，输入的内容可以作为选项
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alife/alicloud-components'

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true },
  {
    label: 'Special Group',
    children: [
      { value: -1, label: 'FALSE' },
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
        aria-label="tag mode"
        mode="tag"
        defaultValue={['10001']}
        onChange={handleChange}
        dataSource={dataSource}
        style={{ width: 300 }}
      />
    </Style>
  )
}
const Style = styled.div``
