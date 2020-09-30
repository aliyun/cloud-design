/**
 * @title 时间在左
 * @description 设置时间轴左边的内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Timeline } from '@alicloudfe/components'

const TimelineItem = Timeline.Item

export default function DemoComponent() {
  return (
    <Style>
      <Timeline>
        <TimelineItem title="Sign" state="process" timeLeft="2016-10-03" />
        <TimelineItem title="Ship" timeLeft="2016-10-02" />
        <TimelineItem title="Order" timeLeft="2016-10-01" />
      </Timeline>
    </Style>
  )
}
const Style = styled.div``
