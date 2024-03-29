/**
 * @title 无障碍支持
 * @description 弹层id, 传入值才会支持无障碍。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Balloon, Input } from '@alicloudfe/components'
import moment from 'moment'

const { Tooltip } = Balloon
const innerButton = <Button className="btrigger">Fill in form</Button>
const triggerTooltip = <Button style={{ margin: '5px' }}>show tooltip</Button>

const App = () => (
  <div className="container nested">
    <Balloon
      id="inner-a11y-balloon-1"
      autoFocus
      trigger={<Button type="primary">Fill in sub-form</Button>}
      popupContainer={(trigger) => trigger.parentNode}
      triggerType="click"
    >
      please input your age:
      <Input
        placeholder="Age"
        size="small"
        label="Age :"
        id="balloon-input-1"
      />
      <br />
      <br />
    </Balloon>

    <span style={{ marginRight: 20 }} />

    <Balloon
      id="a11y-balloon"
      type="primary"
      autoFocus
      trigger={innerButton}
      triggerType="click"
    >
      <Balloon
        id="inner-a11y-balloon"
        autoFocus
        trigger={<Button type="primary">Fill in sub-form</Button>}
        popupContainer={(trigger) => trigger.parentNode}
        triggerType="click"
      >
        please input your age:
        <Input
          placeholder="Age"
          size="small"
          label="Age :"
          id="balloon-input-2"
        />
        <br />
        <br />
      </Balloon>
      <br />
      please input your name:
      <Input
        placeholder="Name"
        size="small"
        label="Name :"
        id="balloon-input-3"
      />
      <br />
      <br />
    </Balloon>

    <span style={{ marginRight: 20 }} />

    <Tooltip trigger={triggerTooltip} id="aria-tooltip">
      <p>This is content for tooltip.</p>
    </Tooltip>
  </div>
)

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .container.nested {
    margin-left: 30px;
  }
`
