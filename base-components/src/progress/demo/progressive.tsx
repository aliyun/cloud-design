/**
 * @title Progressive
 * @description 当开启 `progressive` 模式时，Progress 组件会根据自身的进度自动设置展现的颜色值。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Progress percent={20} progressive />
        <Progress percent={60} progressive />
        <Progress percent={90} progressive />
      </div>
    </Style>
  )
}
const Style = styled.div``
