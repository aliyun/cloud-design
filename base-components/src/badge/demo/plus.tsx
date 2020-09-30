/**
 * @title 大数字
 * @description 超过overflow的数值，会显示`\${overflow}+`，overflow默认值为`99`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Badge } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Badge count={100}>
          <a href="#" className="head-example"></a>
        </Badge>
        <Badge count={200} overflowCount={199}>
          <a href="#" className="head-example"></a>
        </Badge>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .next-badge {
    margin-right: 16px;
  }
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: #eee;
  }
`
