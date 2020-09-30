/**
 * @title 虚拟滚动
 * @description 当树的节点数比较多的时候，设置虚拟滚动提高性能，注意设置高度，且允许滚动。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree } from '@alife/alicloud-components'

function createDataSource(level = 3, count = 5) {
  const dataSource = []
  let num = 0

  const drill = (children, _level, _count) => {
    children.forEach((child, i) => {
      child.children = new Array(_count).fill(null).map((item, k) => {
        const key = `${child.key}-${k}`
        num++
        return {
          key,
          label: key
        }
      })
      _level > 0 && drill(child.children, _level - 1, count)
    })
  }

  dataSource.push({
    label: '0-0',
    key: '0-0'
  })
  drill(dataSource, level, count)
  console.log('node num:', num + 1)
  return dataSource
}

class Demo extends React.Component {
  constructor() {
    super()

    this.state = {
      dataSource: []
    }
  }

  onSelect(keys, info) {
    console.log('onSelect', keys, info)
  }

  onCheck(keys, info) {
    console.log('onCheck', keys, info)
  }

  onEditFinish(key, label, node) {
    console.log('onEditFinish', key, label, node)
  }

  onRightClick(info) {
    console.log('onRightClick', info)
  }

  componentDidMount() {
    this.setState({
      dataSource: createDataSource()
    })
  }

  render() {
    const dataSource = this.state.dataSource

    return (
      dataSource.length && (
        <Tree
          checkable
          editable
          focusable
          showLine
          useVirtual
          animation
          style={{ maxHeight: '480px', overflow: 'auto' }}
          defaultExpandAll
          defaultCheckedKeys={['0-0-1', '0-0-2']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          dataSource={dataSource}
          onEditFinish={this.onEditFinish}
          onRightClick={this.onRightClick}
        />
      )
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
