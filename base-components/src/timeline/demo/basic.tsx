/**
 * @title 基本
 * @description 最简单的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Timeline } from '@alife/alicloud-components'

const TimelineItem = Timeline.Item

export default function DemoComponent() {
  return (
    <Style>
      <Timeline>
        <TimelineItem title="Receipt" state="process" />
        <TimelineItem title="Ship" />
        <TimelineItem title="Order" />
      </Timeline>
    </Style>
  )
}
const Style = styled.div``
