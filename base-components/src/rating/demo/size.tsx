/**
 * @title 尺寸
 * @description 通过 `size` 属性可以控制评分组件的大小，支持三种尺寸 `small`, `medium`, `large`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Rating } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Rating defaultValue={3.2} size="small" />
        <br />
        <br />
        <Rating defaultValue={3.2} />
        <br />
        <br />
        <Rating defaultValue={3.2} size="large" />
      </div>
    </Style>
  )
}
const Style = styled.div``
