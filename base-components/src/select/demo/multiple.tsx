/**
 * @title 多选
 * @description 多选模式, 通过 `showSearch` 可以开启搜索, 但搜索值不可用作选项
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alicloudfe/components'

const dataSource = [
  { value: '10001', label: '速度速度速度速度' },
  { value: 10002, label: '速度速度速度速度' },
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
  const content = (
    <div>
      <Select
        mode="multiple"
        showSearch
        size="large"
        defaultValue={['10001']}
        onChange={handleChange}
        dataSource={dataSource}
        style={{ width: 300 }}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
