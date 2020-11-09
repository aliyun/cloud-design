/**
 * @title 分组
 * @description 使用 `<Checkbox.Group>` 渲染 `<Checkbox>` 分组。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

const CheckboxGroup = () => (
  <div>
    <h4>Horizonal direction</h4>
    <p>
      <Checkbox.Group itemDirection="hoz">
        <Checkbox value="react">React</Checkbox>
        <Checkbox value="vue">Vue</Checkbox>
        <Checkbox value="angular">Angular</Checkbox>
      </Checkbox.Group>
    </p>
    <h4>Vertical direction</h4>
    <p>
      <Checkbox.Group itemDirection="ver">
        <Checkbox value="react">React</Checkbox>
        <Checkbox value="vue">Vue</Checkbox>
        <Checkbox value="angular">Angular</Checkbox>
      </Checkbox.Group>
    </p>
  </div>
)

export default function DemoComponent() {
  const content = <CheckboxGroup />
  return <Style>{content}</Style>
}
const Style = styled.div``
