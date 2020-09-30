/**
 * @title 前后扩展
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Input } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Input
          hasLimitHint
          addonTextBefore="http://"
          addonTextAfter=".com"
          size="large"
          defaultValue="alibaba"
          maxLength={5}
          aria-label="input with config of addonTextBefore and addonTextAfter"
        />
        <br />
        <br />

        <Input
          addonTextBefore="http://"
          addonTextAfter=".com"
          size="medium"
          value="alibaba"
          aria-label="input with config of addonTextBefore and addonTextAfter"
        />
        <br />
        <br />

        <Input
          addonTextBefore="http://"
          addonTextAfter=".com"
          size="small"
          value="alibaba"
          aria-label="input with config of addonTextBefore and addonTextAfter"
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
