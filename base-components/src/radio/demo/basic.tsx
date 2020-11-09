/**
 * @title 基本
 * @description 使用 `Radio` 渲染的基本组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div>
      <h4>Without Label</h4>
      <Radio defaultChecked />
      &nbsp;
      <Radio checked />
      &nbsp;
      <Radio disabled />
      &nbsp;
      <Radio checked disabled />
      &nbsp;
      <Radio />
      <br />
      <h4>With Label</h4>
      <Radio id="apple">Apple</Radio>&nbsp;
      <Radio id="banana" />
      <label htmlFor="banana" className="next-radio-label">
        Banana
      </label>
      &nbsp;
      <Radio id="apple2" label="Apple" className="testClassname" />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
