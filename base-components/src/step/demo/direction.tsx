/**
 * @title 垂直模式
 * @description 对于点型和圆圈型的 Step 组件而言，可以通过设置 `direction` 属性设置其展示方向为垂直。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Step } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Step current={1} direction="ver" animation={false}>
          <Step.Item title="Step 1" content="Open the refrigerator door" />
          <Step.Item
            title="Step 2"
            content="Put the elephant in the refrigerator"
          />
          <Step.Item title="Step 3" content="Close the refrigerator door" />
        </Step>

        <br />
        <br />
        <Step current={1} direction="ver" shape="dot" animation={false}>
          <Step.Item title="Step 1" content="Open the refrigerator door" />
          <Step.Item
            title="Step 2"
            content="Put the elephant in the refrigerator"
          />
          <Step.Item title="Step 3" content="Close the refrigerator door" />
        </Step>
      </div>
    </Style>
  )
}
const Style = styled.div``
