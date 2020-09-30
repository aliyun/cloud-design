/**
 * @title 使用数据直接生成
 * @description 使用 `dataSource` 生成树结构，除设置 label, value, key, children 属性外，还可传入 TreeNode 的其他属性，包括 selectable, disabled, checkboxDisabled, isLeaf，推荐使用 `dataSource` 而不是手动生成 `TreeNode` 的方式生成树，这样使用更简单，性能更好。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TreeSelect } from '@alicloudfe/components'

const treeData = [
  {
    label: 'Component',
    value: '1',
    children: [
      {
        label: 'Form',
        value: '2',
        children: [
          {
            label: 'Input',
            value: '4'
          },
          {
            label: 'Select',
            value: '5',
            disabled: true
          }
        ]
      },
      {
        label: 'Display',
        value: '3',
        children: [
          {
            label: 'Table',
            value: '6'
          }
        ]
      }
    ]
  }
]
class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value, data) {
    console.log(value, data)
  }

  render() {
    return (
      <TreeSelect
        treeDefaultExpandAll
        dataSource={treeData}
        onChange={this.handleChange}
        style={{ width: 200 }}
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
