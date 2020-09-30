/**
 * @title 简单
 * @description 最简单的用法,size可设置大小。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Switch } from '@alife/alicloud-components'

function onChange(checked) {
  console.log(`switch to ${checked}`)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Switch
          checkedChildren="on"
          onChange={onChange}
          unCheckedChildren="off"
        />
        <br />
        <Switch defaultChecked={false} onChange={onChange} size="small" />
        <br />
        <Switch
          className="large-width"
          checkedChildren="on"
          onChange={onChange}
          unCheckedChildren="off please"
        />
      </div>
    </Style>
  )
}
const Style = styled.div`
  .large-width {
    width: 100px;
  }
`
