/**
 * @title 对齐
 * @description 可以自定义对齐方式
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay } from '@alicloudfe/components'

const { Popup } = Overlay

export default function DemoComponent() {
  const content = (
    <div>
      <div id="container1" className="overlay-container">
        normal example
        <Overlay target="container1" visible align="tr tr">
          <span>123</span>
        </Overlay>
        <Overlay target="container1" visible align="cc cr">
          <span>123</span>
        </Overlay>
        <Overlay target="container1" visible align="bc bc">
          <span>123</span>
        </Overlay>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div id="container2" className="overlay-container" dir="rtl">
        dir=rtl example
        <Overlay target="container2" rtl visible align="tr tr">
          <span>123</span>
        </Overlay>
        <Overlay target="container2" rtl visible align="cc cr">
          <span>123</span>
        </Overlay>
        <Overlay target="container2" rtl visible align="bc bc">
          <span>123</span>
        </Overlay>
      </div>
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-container {
    position: relative;
    height: 150px;
    margin: 50px;
    border: 1px solid #999;
    overflow: auto;
    text-align: center;
    color: red;
  }
`
