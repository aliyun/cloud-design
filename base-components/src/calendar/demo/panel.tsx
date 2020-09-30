/**
 * @title 日历面板
 * @description 日历面板通用用于嵌套在弹层容器中。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Calendar } from '@alicloudfe/components'
import moment from 'moment'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Calendar shape="panel" value={moment().add(1, 'days')} />
      </div>
    </Style>
  )
}
const Style = styled.div``
