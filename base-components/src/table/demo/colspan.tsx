/**
 * @title 行列合并
 * @description 通过 cellProps 进行列合并。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Table } from '@alicloudfe/components'

const onRowClick = function (record, index, e) {
    console.log(record, index, e)
  },
  dataSource = () => {
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push({
        title: {
          name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
        },
        id: 100306660940 + i,
        year: i === 0 ? '-' : `2019-10-2${3 + i}`,
        month: `16:39:${23 + i}`
      })
    }
    return result
  },
  render = (value, index, record) => {
    return <a>Remove({record.id})</a>
  },
  cellProps = (rowIndex, colIndex) => {
    if (rowIndex === 2 && colIndex === 1) {
      return {
        // take 3 rows's space
        rowSpan: 3
      }
    }

    if (rowIndex === 0 && colIndex === 2) {
      return {
        // take 2 cols' space
        colSpan: 2
      }
    }
  }

export default function DemoComponent() {
  const content = (
    <Table
      dataSource={dataSource()}
      onRowClick={onRowClick}
      cellProps={cellProps}
    >
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" colSpan={2} dataIndex="year" />
      <Table.Column colSpan={0} dataIndex="month" />
    </Table>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
