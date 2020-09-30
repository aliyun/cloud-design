/**
 * @title 按钮尺寸
 * @description 可以通过设置 `size` 属性控制按钮的尺寸，可选值为 `large` `medium` `small`，其中默认值为 `medium`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Button type="primary" size="large">
          <Icon type="atm" />
          Large
        </Button>
        &nbsp;&nbsp;
        <Button type="primary">
          <Icon type="atm" />
          Medium
        </Button>
        &nbsp;&nbsp;
        <Button type="primary" size="small">
          <Icon type="atm" />
          Small
        </Button>
        <br />
        <br />
        <Button.Group size="large">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </Button.Group>
      </div>
    </Style>
  )
}
const Style = styled.div``
