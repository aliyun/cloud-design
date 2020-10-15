/**
 * @title 图标按钮
 * @description Button 可以嵌入 Icon，默认情况下 Icon 尺寸自动跟随 Button 的尺寸。如果用户想要控制 Icon 的大小，可以通过 `iconSize` 属性进行设置。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Button>
          <Icon type="atm"/>
        </Button>{' '}
        &nbsp;&nbsp;
        <Button type="primary">
          <Icon type="home"/>
        </Button>{' '}
        &nbsp;&nbsp;
        <Button text>
          <Icon type="atm" /> ATM
        </Button>{' '}
        &nbsp;&nbsp;
        <Button warning>
          <Icon type="atm" /> ATM
        </Button>{' '}
        &nbsp;&nbsp;
        <Button iconSize="xxs">
          <Icon type="arrow-left" /> ARROW
        </Button>{' '}
        &nbsp;&nbsp;
      </div>
    </Style>
  )
}
const Style = styled.div``
