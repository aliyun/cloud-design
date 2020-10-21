/**
 * @title withContext
 * @description 通过 `Message.withContext(({ contextMessage }) => {} )`方法，封装 使用到函数式调用弹窗 的组件（例如业务组件或者当前App等），可以将 被封装组件 代码所在上下文的context注入到`contextMessage`中。
 */

import * as React from 'react'
import styled from 'styled-components'

export default function DemoComponent() {
  return (
    <Style>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://codepen.io/acejerry/pen/ZEOQjzr"
      >
        点击查看 Message.withContext Demo
      </a>
    </Style>
  )
}
const Style = styled.div``
