/**
 * @title 无障碍
 * @description 通过Tab键或其他方式使滑块被聚焦之后，可以通过按下键盘的左右箭头来改变滑块的位置，目前只有单滑块支持无障碍。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range } from '@alife/alicloud-components'

const style = {
  marginBottom: '15px'
}

export default function DemoComponent() {
  return (
    <Style>
      <div style={{ width: '400px', margin: '50px' }}>
        <h4>single slider - from left to right</h4>
        <Range defaultValue={30} style={style} hasTip={false} />
        <h4>single slider - from right to left</h4>
        <Range defaultValue={30} style={style} reverse hasTip={false} />
      </div>
    </Style>
  )
}
const Style = styled.div``
