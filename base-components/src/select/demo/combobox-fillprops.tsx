/**
 * @title 自动完成填充字段
 * @description `AutoComplete` 是一个带填充功能的 Input， 通过 fillProps 选择填充 {label,value} 的哪个字段到 Input
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select, Radio } from '@alicloudfe/components'

const { AutoComplete } = Select
const dataSource = [
  { value: 'Hang Meimei', label: '韩梅梅' },
  { value: 'Gao Hui', label: '高辉' },
  { value: 'Zhang San', label: '张三' },
  { value: 'Li Si', label: '李四' },
  { value: 'Wang Wu', label: '王五' },
  { value: 'Sun Yang', label: '孙杨' }
]

class Demo extends React.Component {
  state = {
    value: '',
    fillProps: 'value'
  }
  handleCtrlChange = (fillProps) => {
    this.setState({ fillProps })
  }

  handleChange = (value) => {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          fillProps:
          <Radio.Group
            style={{ marginLeft: 8 }}
            shape="button"
            value={this.state.fillProps}
            onChange={this.handleCtrlChange}
          >
            <Radio value="value">value</Radio>
            <Radio value="label">label</Radio>
          </Radio.Group>
        </div>
        <AutoComplete
          value={this.state.value}
          fillProps={this.state.fillProps}
          style={{ width: 300 }}
          onChange={this.handleChange}
          dataSource={dataSource}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
