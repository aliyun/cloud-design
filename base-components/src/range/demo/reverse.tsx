/**
 * @title 选择态反转
 * @description 设置reverse为true, 选中态会反转。
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
        <Range defaultValue={30} style={style} hasTip={false} />
        <Range defaultValue={30} style={style} reverse hasTip={false} />
        <Range slider={'double'} defaultValue={[20, 40]} style={style} />
        <Range
          slider={'double'}
          defaultValue={[20, 40]}
          style={style}
          reverse
        />
        <Range defaultValue={30} disabled style={style} />
        <Range defaultValue={30} disabled style={style} reverse />
        <Range
          slider={'double'}
          defaultValue={[20, 40]}
          disabled
          style={style}
        />
        <Range
          slider={'double'}
          defaultValue={[20, 40]}
          disabled
          style={style}
          reverse
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
