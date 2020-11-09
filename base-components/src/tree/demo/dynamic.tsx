/**
 * @title 异步加载数据
 * @description 点击展开节点，动态加载数据。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tree } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { label: 'Expand to load', key: '0' },
        { label: 'Expand to load', key: '1' },
        { label: 'Leaf', key: '2', isLeaf: true }
      ]
    }

    this.onLoadData = this.onLoadData.bind(this)
  }

  onLoadData(node) {
    return new Promise((resolve) => {
      if (node.props.children) {
        return resolve()
      }

      const { eventKey, pos } = node.props
      const item = this.getItemByPos(pos)
      setTimeout(() => {
        item.children = [
          { label: 'Child Tree', key: `${eventKey}-0` },
          { label: 'Child Tree', key: `${eventKey}-1` }
        ]
        this.setState({
          data: [...this.state.data]
        })
        resolve()
      }, 1000)
    })
  }

  getItemByPos(pos) {
    return pos
      .split('-')
      .slice(1)
      .reduce((ret, num) => ret.children[num], { children: this.state.data })
  }

  render() {
    return <Tree dataSource={this.state.data} loadData={this.onLoadData} />
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
