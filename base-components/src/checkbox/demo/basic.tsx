/**
 * @title 基本
 * @description 使用 `Checkbox` 渲染的基本组件。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <h6>Different status without label:</h6>
        <Checkbox>Unchecked</Checkbox>
        <Checkbox defaultChecked>DefaultChecked</Checkbox>
        <Checkbox defaultIndeterminate>Indeterminate</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>;
        <Checkbox disabled checked>
          Checked-Disabled
        </Checkbox>
        <Checkbox checked>Checked</Checkbox>
        <h6>Using with label</h6>
        <Checkbox>Banana</Checkbox>&nbsp;
        <Checkbox id="apple" />
        <label htmlFor="apple" className="next-checkbox-label">
          Apple
        </label>
        &nbsp;
        <label>
          <Checkbox id="pear" />
          <span className="next-checkbox-label">Pear</span>
        </label>
        &nbsp;
        <Checkbox label="Banana" />
      </div>
    </Style>
  )
}
const Style = styled.div``
