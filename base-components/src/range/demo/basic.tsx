/**
 * @title 基本
 * @description 基本滑块，当 `slider` 为 `double` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Range } from '@alicloudfe/components'

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
        <h4>double slider - from outside to inside</h4>
        <Range slider={'double'} defaultValue={[20, 40]} style={style} />
        <h4>double slider - from inside to outside</h4>
        <Range
          slider={'double'}
          defaultValue={[20, 40]}
          style={style}
          reverse
        />
        <h4>Disabled</h4>
        <Range defaultValue={30} disabled style={style} />
        <h4>Disabled</h4>
        <Range
          slider={'double'}
          defaultValue={[20, 40]}
          disabled
          style={style}
        />
        <h4>tooltipVisible disabled</h4>
        <Range disabled tooltipVisible defaultValue={60} style={style} />
        <h4>tooltipVisible</h4>
        <Range tooltipVisible defaultValue={60} style={style} />
        <h4>tooltipVisible disabled</h4>
        <Range
          disabled
          tooltipVisible
          slider={'double'}
          defaultValue={[57, 77]}
          style={style}
        />
        <h4>tooltipVisible</h4>
        <Range
          tooltipVisible
          slider={'double'}
          defaultValue={[57, 77]}
          style={style}
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
