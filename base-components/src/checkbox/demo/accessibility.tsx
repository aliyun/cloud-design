/**
 * @title 无障碍支持
 * @description 通过`aria-label`对`Checkbox`组件进行描述。关于键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

const CheckboxGroup = () => (
  <div>
    <p>Programming language：</p>
    <Checkbox.Group aria-label="Please select a programming language">
      <Checkbox value="python">python</Checkbox>
      <Checkbox value="java">java</Checkbox>
      <Checkbox value="angular">angular</Checkbox>
      <Checkbox value="c">c</Checkbox>
      <Checkbox value="other">other</Checkbox>
    </Checkbox.Group>
  </div>
)

export default function DemoComponent() {
  const content = <CheckboxGroup />
  return <Style>{content}</Style>
}
const Style = styled.div``
