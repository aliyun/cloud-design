/**
 * @title 搜索
 * @description 展示搜索的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Transfer } from '@alife/alicloud-components'

const dataSource = (() => {
  const dataSource = []

  for (let i = 0; i < 10; i++) {
    dataSource.push({
      label: `content${i}`,
      value: `${i}`,
      disabled: i % 4 === 0
    })
  }

  return dataSource
})()

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)
  }

  render() {
    return (
      <Transfer
        showSearch
        defaultValue={['3']}
        dataSource={dataSource}
        defaultLeftChecked={['1']}
        onChange={this.handleChange}
        titles={['Searchable', 'Searchable']}
      />
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div``
