/**
 * @title 圆形进度条
 * @description 通过 `shape` 属性可以改变进度指示器的外观，当取值为 `circle` 时为圆形进度条。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Progress, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Progress percent={30} shape="circle" /> &nbsp;&nbsp;
      <Progress percent={50} shape="circle" /> &nbsp;&nbsp;
      <Progress percent={80} shape="circle" textRender={() => ''} />
      &nbsp;&nbsp;
      <Progress
        percent={100}
        shape="circle"
        textRender={() => <Icon type="select" size="xl" />}
      />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
