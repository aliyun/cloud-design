/**
 * @title 自定义提示语位置
 * @description 你可以选择提示语的位置,目前支持两个值 right/bottom(默认值)
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <Loading tip="default">
        <div className="demo">test</div>
      </Loading>
      <Loading tip="right" tipAlign="right">
        <div className="demo">test</div>
      </Loading>
      <Loading tip="bottom" tipAlign="bottom">
        <div className="demo">test</div>
      </Loading>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo {
    width: 500px;
    background-color: #f2f3f7;
    text-align: center;
    padding: 50px;
  }
  .next-loading {
    margin-bottom: 5px;
  }
`
