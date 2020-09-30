/**
 * @title min,max,step
 * @description 可以通过 `min` 与 `max` 设置范围边界。通过 `step`(被 max - min 整除) 设置移动的最小步频。min默认为0,max默认为100.
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range } from '@alife/alicloud-components'

const style = {
  marginBottom: '40px',
  marginTop: '40px'
}

export default function DemoComponent() {
  return (
    <Style>
      <div style={{ width: '400px', margin: '50px' }}>
        <p>Range 0 ~ 1024</p>
        <Range
          defaultValue={128}
          min={0}
          max={1024}
          marks={[0, 1024]}
          style={style}
        />
        <p>Range 0 ~ 1024，step 128</p>
        <Range
          defaultValue={512}
          min={0}
          max={1024}
          step={128}
          marks={[0, 1024]}
          style={style}
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
