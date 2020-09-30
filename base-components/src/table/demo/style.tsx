/**
 * @title 样式
 * @description 自定义表格边框
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table, Button } from '@alicloudfe/components'

const dataSource = () => {
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push({
        title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
        id: 100306660940 + i,
        time: 2000 + i
      })
    }
    return result
  },
  render = (value, index, record) => {
    return <a>Remove({record.id})</a>
  }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: dataSource(),
      className: '',
      align: 'left'
    }
  }
  toggleZebra() {
    this.setState({
      isZebra: !this.state.isZebra
    })
  }
  toggleBorder() {
    this.setState({
      hasBorder: !this.state.hasBorder
    })
  }
  makeBeauty() {
    this.setState({
      className: 'beauty'
    })
  }
  makeAlign() {
    this.setState({
      align: 'right'
    })
  }
  render() {
    return (
      <span>
        <p>
          <Button onClick={this.toggleZebra.bind(this)}> Toggle zebra </Button>{' '}
          &nbsp;
          <Button onClick={this.toggleBorder.bind(this)}>
            {' '}
            Toggle border
          </Button>{' '}
          &nbsp;
          <Button onClick={this.makeBeauty.bind(this)}>
            {' '}
            Make second column beauty{' '}
          </Button>{' '}
          &nbsp;
          <Button onClick={this.makeAlign.bind(this)}>
            {' '}
            Make first column align right{' '}
          </Button>{' '}
          &nbsp;
        </p>
        <Table
          dataSource={this.state.dataSource}
          isZebra={this.state.isZebra}
          hasBorder={this.state.hasBorder}
        >
          <Table.Column title="Id" dataIndex="id" alignHeader="center" />
          <Table.Column
            title="Title"
            dataIndex="title"
            align={this.state.align}
            className={this.state.className}
          />
          <Table.Column title="Time" dataIndex="time" />
          <Table.Column cell={render} width={200} />
        </Table>
      </span>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <App />
    </Style>
  )
}
const Style = styled.div`
  .beauty {
    background: #f7f7f7;
  }
`
