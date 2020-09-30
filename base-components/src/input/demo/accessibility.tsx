/**
 * @title 无障碍
 * @description 通过`aria-label`对`Input`组件进行描述。关于键盘操作请参考`ARIA and KeyBoard`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

function onChange(v) {
  console.log(v)
}
function onKeyDown(v) {
  console.log(v)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Input
          size="large"
          placeholder="please input"
          onChange={onChange}
          onKeyDown={onKeyDown}
          aria-label="this is input"
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
