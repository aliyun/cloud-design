/**
 * @title 自定义标签类型
 * @description 默认情况下 Button 组件使用 `<button>` 标签来渲染按钮，通过 `component` 属性可以自定义 Button 的标签类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button } from '@alicloudfe/components'

const props = {
  component: 'a',
  href: 'http://www.alibaba.com',
  target: '_blank'
}

export default function DemoComponent() {
  const content = (
    <div>
      <Button {...props} type="primary">
        alibaba.com
      </Button>{' '}
      &nbsp;&nbsp;
      <Button {...props} type="secondary">
        alibaba.com
      </Button>{' '}
      &nbsp;&nbsp;
      <Button {...props} type="normal">
        alibaba.com
      </Button>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
