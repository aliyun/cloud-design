/**
 * @title 禁用状态
 * @description 为 `Input` 设置 `disabled` 状态；
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Input
          disabled
          aria-label="disabled"
          placeholder="disabled"
          size="small"
        />
        <br />
        <br />

        <Input
          disabled
          aria-label="disabled"
          addonTextBefore="http://"
          addonTextAfter=".com"
          size="medium"
          value="alibaba"
        />
        <br />
        <br />

        <Input
          disabled
          aria-label="disabled"
          placeholder="medium"
          maxLength={10}
          hasLimitHint
        />
        <br />
        <br />

        <Input.TextArea
          disabled
          aria-label="disabled"
          placeholder="medium"
          maxLength={10}
          hasLimitHint
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
