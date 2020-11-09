/**
 * @title 父子节点选中是否关联
 * @description 展示父子节点选中是否关联的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Tree } from '@alicloudfe/components'

const data = [
  {
    key: '0-0',
    label: '0-0',
    children: [
      {
        key: '0-0-0',
        label: '0-0-0',
        children: [
          {
            key: '0-0-0-0',
            label: '0-0-0-0',
            children: [
              {
                key: '0-0-0-0-0',
                label: '0-0-0-0-0'
              }
            ]
          },
          {
            key: '0-0-0-1',
            label: '0-0-0-1'
          }
        ]
      },
      {
        key: '0-0-1',
        label: '0-0-1',
        children: [
          {
            key: '0-0-1-0',
            label: '0-0-1-0'
          },
          {
            key: '0-0-1-1',
            label: '0-0-1-1'
          }
        ]
      }
    ]
  }
]

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkedKeys: [],
      checkStrictly: false
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleCheckStrictly = this.handleCheckStrictly.bind(this)
  }

  handleCheck(keys, info) {
    console.log(keys, info)

    this.setState({
      checkedKeys: keys
    })
  }

  handleCheckStrictly() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      checkedKeys: []
    })
  }

  render() {
    const { checkedKeys, checkStrictly } = this.state

    return (
      <div className="control-check-demo">
        <label className="strictly-check">
          <Checkbox
            checked={checkStrictly}
            onChange={this.handleCheckStrictly}
          />
          <span className="strictly-text">Enable checkStrictly</span>
        </label>
        <Tree
          defaultExpandAll
          checkable
          checkStrictly={checkStrictly}
          checkedKeys={checkedKeys}
          onCheck={this.handleCheck}
          dataSource={data}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .control-check-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-check-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
