/**
 * @title 基本
 * @description 展示图标基本使用方法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = <Icon type="atm" />
  return <Style>{content}</Style>
}
const Style = styled.div``
