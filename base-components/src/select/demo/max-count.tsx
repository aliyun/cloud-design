/**
 * @title 最大数量
 * @description 多选模式
 */

import * as React from 'react'
import styled from 'styled-components'

import { Select, Balloon } from '@alife/alicloud-components'

const { Tooltip } = Balloon

const dataSource = [
  { value: '10001', label: 'Lucy King' },
  { value: 10002, label: 'Lily King' },
  { value: 10003, label: 'Tom Cat', disabled: true },
  {
    label: 'Special Group',
    children: [
      { value: -1, label: 'FALSE' },
      { value: 0, label: 'ZERO' }
    ]
  }
]

function handleChange(value) {
  console.log(value)
}

const maxTagPlaceholder = (selectedValues, totalValues) => {
  const trigger = (
    <span>{`${selectedValues.length}/${totalValues.length}`}</span>
  )
  const labels = selectedValues.map((obj) => obj.label)

  return <Tooltip trigger={trigger}>{labels.join(', ')}</Tooltip>
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        hasSelectAll:
        <br />
        <Select
          hasSelectAll
          mode="multiple"
          onChange={handleChange}
          dataSource={dataSource}
          style={{ width: 200 }}
        />
        <br />
        <br />
        maxTagCount=2
        <br />
        <Select
          maxTagCount={2}
          defaultValue={['10001', '10002', '-1']}
          mode="multiple"
          onChange={handleChange}
          dataSource={dataSource}
          style={{ width: 200 }}
        />{' '}
        <br />
        <br />
        maxTagPlaceholder
        <br />
        <Select
          maxTagCount={2}
          maxTagPlaceholder={maxTagPlaceholder}
          defaultValue={['10001', '10002', '-1']}
          mode="multiple"
          onChange={handleChange}
          dataSource={dataSource}
          style={{ width: 200 }}
        />
        <br />
        <br />
        tagInline <br />
        <Select
          maxTagCount={2}
          tagInline
          mode="multiple"
          defaultValue={['10001', '10002', '-1']}
          onChange={handleChange}
          dataSource={dataSource}
          style={{ width: 200 }}
        />
        <br />
        <br />
        maxTagPlaceholder
        <br />
        <Select
          maxTagCount={2}
          tagInline
          maxTagPlaceholder={maxTagPlaceholder}
          defaultValue={['10001', '10002', '-1']}
          mode="multiple"
          onChange={handleChange}
          dataSource={dataSource}
          style={{ width: 200 }}
        />
        <br />
        <br />
      </div>
    </Style>
  )
}
const Style = styled.div``
