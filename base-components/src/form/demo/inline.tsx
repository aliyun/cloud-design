/**
 * @title 水平
 * @description
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input } from '@alicloudfe/components'

const FormItem = Form.Item

function handleSubmit(v) {
  console.log(v)
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Form inline>
          <FormItem label="Username:">
            <FormItem>
              <Input name="first" style={{ width: 80 }} placeholder="first" />
            </FormItem>
            <FormItem>
              <Input name="second" style={{ width: 80 }} placeholder="second" />
            </FormItem>
          </FormItem>
          <FormItem label="Password:" required hasFeedback={false}>
            <Input
              htmlType="password"
              name="inlinePass"
              placeholder="Please enter your password!"
            />
          </FormItem>

          <FormItem label=" ">
            <Form.Submit onClick={handleSubmit}>Submit</Form.Submit>
          </FormItem>
        </Form>
      </div>
    </Style>
  )
}
const Style = styled.div``
