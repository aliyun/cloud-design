/**
 * @title 标签在上
 * @description `size` 会强制设置 `FormItem` 下的所有组件的size
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Select } from '@alicloudfe/components'

const FormItem = Form.Item
const Option = Select.Option

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Form labelAlign="top">
          <FormItem label="Account:">
            <Input
              placeholder="Please enter your user name"
              id="userName"
              name="userName"
            />
          </FormItem>

          <FormItem required label="Password:">
            <Input
              htmlType="password"
              placeholder="Please enter your password"
              id="password"
              name="password"
            />
          </FormItem>

          <FormItem label="Password:" validateState="error">
            <Input
              htmlType="password"
              placeholder="Please enter your password"
              id="rePass"
              name="rePass"
            />
          </FormItem>

          <FormItem label="Size:">
            <Select style={{ width: '100%' }} name="size">
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
        </Form>

        <Form inline labelAlign="top">
          <FormItem label="Account:">
            <Input
              placeholder="Please enter your user name"
              id="userName2"
              name="userName2"
            />
          </FormItem>
          <FormItem label="Password:">
            <Input
              htmlType="password"
              placeholder="Please enter your password"
              id="password2"
              name="password2"
            />
          </FormItem>
          <FormItem label="Password:" validateState="error">
            <Input
              htmlType="password"
              placeholder="Please enter your password"
              id="rePass2"
              name="rePass2"
            />
          </FormItem>
          <FormItem label="Size:">
            <Select style={{ width: '100%' }} name="size2">
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div`
  .demo-ctl {
    background-color: #f1f1f1;
    padding: 10px;
    color: #0a7ac3;
    border-left: 4px solid #0d599a;
  }
`
