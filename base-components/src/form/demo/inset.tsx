/**
 * @title 标签内嵌
 * @description 通过设置`labelAlign="inset"` (只适用于Input、Select组件，其他组件不适用)
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Select } from '@alicloudfe/components'

const FormItem = Form.Item
const Option = Select.Option

const formItemLayout = {
  labelCol: { fixedSpan: 4 },
  wrapperCol: { span: 20 }
}

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Form
          {...formItemLayout}
          labelAlign="inset"
          style={{ maxWidth: '500px' }}
        >
          <FormItem label="User Name:">
            <Input
              placeholder="Please enter your name"
              id="insetUserName"
              name="insetUserName"
            />
          </FormItem>
          <FormItem label="Password:" validateState="error">
            <Input
              htmlType="password"
              placeholder="Please enter your password"
              id="insetPassword"
              name="insetPassword"
            />
          </FormItem>

          <FormItem label="Size：">
            <Select style={{ width: '100%' }}>
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
        </Form>

        <br />
        <br />

        <Form labelAlign="inset" inline>
          <FormItem label="User Name:">
            <Input
              placeholder="Enter your name"
              id="insetUserName2"
              name="insetUserName2"
            />
          </FormItem>
          <FormItem
            label="Password:"
            validateState="error"
            help="Password is required!"
          >
            <Input
              htmlType="password"
              placeholder="Enter your password"
              id="insetPassword2"
              name="insetPassword2"
            />
          </FormItem>

          <FormItem label="Size:">
            <Select style={{ width: 150 }}>
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
    </Style>
  )
}
const Style = styled.div``
