/**
 * @title 无障碍
 * @description 请参考`ARIA and KeyBoard`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Radio } from '@alicloudfe/components'

const RadioGroup = Radio.Group

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <span id="radio-a11y">Programming language ：</span>
        <RadioGroup aria-labelledby="radio-a11y">
          <Radio id="python" value="python">
            python
          </Radio>
          <Radio id="java" value="java">
            java
          </Radio>
          <Radio id="c" value="c">
            c
          </Radio>
        </RadioGroup>
      </div>
    </Style>
  )
}
const Style = styled.div``
