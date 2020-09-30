/**
 * @title 自定义 value
 * @description Select 的 value 可以是任意非空类型的值，但是要保证 toString() 后是唯一的。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select } from '@alife/alicloud-components'

const dataSource = [
  { value: 'Lilith', age: 22, gender: 'F' },
  { value: 'Tom Cat', age: 28, gender: 'M' },
  { value: 'Jim Green', age: 18, gender: 'M' },
  { value: 'Monkey King', age: 999, gender: 'M' }
]

const handleChange = (value) => {
  console.log('handleChange: ', value)
}

const valueRender = (v) => {
  return `${v.value} / ${v.gender} / ${v.age}`
}

export default function DemoComponent() {
  return (
    <Style>
      <Select
        mode="multiple"
        placeholder="custom value"
        valueRender={valueRender}
        dataSource={dataSource}
        onChange={handleChange}
      />
    </Style>
  )
}
const Style = styled.div``
