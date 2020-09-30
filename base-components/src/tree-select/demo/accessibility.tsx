/**
 * @title 无障碍
 * @description 通过`aria-labelledby`对组件进行描述。关于键盘操作请参考`ARIA and KeyBoard`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { TreeSelect } from '@alife/alicloud-components'

const TreeNode = TreeSelect.Node

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
      <div>
        <span id="a11y-tree-select">TreeSelect: </span>
        <TreeSelect
          treeDefaultExpandAll
          aria-labelledby="a11y-tree-select"
          onChange={this.handleChange}
          style={{ width: 200 }}
        >
          <TreeNode key="1" value="1" label="Component">
            <TreeNode key="2" value="2" label="Form">
              <TreeNode key="4" value="4" label="Input" />
              <TreeNode key="5" value="5" label="Select" disabled />
            </TreeNode>
            <TreeNode key="3" value="3" label="Display">
              <TreeNode key="6" value="6" label="Table" />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
      </div>
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
