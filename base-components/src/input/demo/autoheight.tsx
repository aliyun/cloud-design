/**
 * @title 自动高度
 * @description 设置 `Input` 为 多行文本域；
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Input.TextArea
          autoHeight
          aria-label="auto height"
          placeholder="autoHeight"
          onKeyDown={(e, opts) => {
            console.log('onKeyDown', opts)
          }}
        />
        <br />
        <br />

        <Input.TextArea
          aria-label="auto height"
          autoHeight={{ minRows: 2, maxRows: 6 }}
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
