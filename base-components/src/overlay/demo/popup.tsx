/**
 * @title 触发的弹层
 * @description 使用 Popup 弹出一个弹层。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay } from '@alife/alicloud-components'

const { Popup } = Overlay

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Popup trigger={<button>Open</button>} triggerType="click">
          <span className="overlay-demo">Hello World From Popup!</span>
        </Popup>
        <br />
        <Popup
          trigger={<button>Use Down Arrow to open</button>}
          triggerType="click"
          triggerClickKeycode={40}
        >
          <span className="overlay-demo">Hello World From Popup!</span>
        </Popup>
      </div>
    </Style>
  )
}
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`
