/**
 * @title Loading动画尺寸
 * @description 设置Loading动画的尺寸,只对原生的indicator管用
 */

import * as React from 'react'
import styled from 'styled-components'

import { Loading } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Loading tip="normal(size default large)">
          <div className="demo">test</div>
        </Loading>
        <Loading tip="large" size="large">
          <div className="demo">test</div>
        </Loading>
        <Loading tip="medium" size="medium">
          <div className="demo">test</div>
        </Loading>
      </div>
    </Style>
  )
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
