/**
 * @title 尺寸
 * @description 可以通过 `size` 属性制定进度条的大小。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Progress percent={30} size="small" />
        <Progress percent={50} size="medium" />
        <Progress percent={90} size="large" />
        <br />
        <Progress percent={30} size="small" shape="circle" /> &nbsp;&nbsp;
        <Progress percent={50} size="medium" shape="circle" /> &nbsp;&nbsp;
        <Progress percent={90} size="large" shape="circle" />
      </div>
    </Style>
  )
}
const Style = styled.div``
