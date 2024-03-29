/**
 * @title 固定表头
 * @description 表格可以固定表头,支持sticky方式
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table, Button, Select, Box } from '@alicloudfe/components'

const Option = Select.Option
const dataSource = (length) => {
  const result = []
  for (let i = 0; i < length; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    })
  }
  return result
}

const render = (value, index, record) => {
  return (
    <Select
      popupContainer={(node) => node.parentNode}
      popupProps={{ autoFit: true }}
      defaultValue="jack"
      aria-label="name is"
      showSearch
      hasClear
    >
      <Option value="jack">Jack</Option>
      <Option value="frank">Frank</Option>
      <Option value="hugo">Hugo</Option>
    </Select>
  )
}

class App extends React.Component {
  state = {
    sticky: false,
    lock: false,
    dataSource: dataSource(50)
  }
  onSwitch(tag) {
    const props = {}
    switch (tag) {
      case 'sticky':
        props.sticky = true
        break
      case 'lock':
        props.lock = true
        break
      case 'dataSource':
        props.dataSource =
          this.state.dataSource.length > 0 ? [] : dataSource(50)
        break
      default:
        break
    }

    this.setState(props)
  }
  render() {
    return (
      <div>
        <Box direction="row" spacing={20}>
          <Button onClick={this.onSwitch.bind(this, 'sticky')}>
            enable sticky
          </Button>
          <Button onClick={this.onSwitch.bind(this, 'lock')}>
            enable lock
          </Button>
          <Button onClick={this.onSwitch.bind(this, 'dataSource')}>
            toggle dataSource
          </Button>
        </Box>
        <Table
          dataSource={this.state.dataSource}
          fixedHeader
          stickyHeader={this.state.sticky}
        >
          <Table.Column
            title="Id"
            dataIndex="id"
            width={200}
            lock={this.state.lock}
          />
          <Table.Column title="Title" dataIndex="title.name" width={200} />
          <Table.Column title="Time" dataIndex="time" width={200} />
          <Table.Column title="test" cell={render} width={200} />
        </Table>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-table td .next-table-cell-wrapper {
    overflow: visible;
  }
`
