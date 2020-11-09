/**
 * @title 尺寸
 * @description `size` 会强制设置 `FormItem` 下的所有组件的size
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Select } from '@alicloudfe/components'

const FormItem = Form.Item
const Option = Select.Option
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

class Demo extends React.Component {
  state = {
    size: 'medium'
  }

  handleChange = (v) => {
    this.setState({
      size: v
    })
  }

  render() {
    return (
      <div>
        <Form
          {...formItemLayout}
          size={this.state.size}
          style={{ maxWidth: '500px' }}
        >
          <FormItem label="Size:">
            <Select
              value={this.state.size}
              onChange={this.handleChange}
              style={{ width: '100%' }}
            >
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
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
              placeholder="Check your password"
              id="rePass"
              name="rePass"
            />
          </FormItem>
        </Form>

        <br />
        <br />

        <Form size={this.state.size} inline>
          <FormItem label="Size:">
            <Select
              style={{ width: '100%' }}
              value={this.state.size}
              onChange={this.handleChange}
            >
              <Option value="small">small</Option>
              <Option value="medium">medium</Option>
              <Option value="large">large</Option>
            </Select>
          </FormItem>
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
              placeholder="Check your password"
              id="rePass2"
              name="rePass2"
            />
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .demo-ctl {
    background-color: #f1f1f1;
    padding: 10px;
    color: #0a7ac3;
    border-left: 4px solid #0d599a;
  }
`
