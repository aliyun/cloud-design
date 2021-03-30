/**
 * @title 基本
 * @description 表单布局、编辑、提交、校验的基本使用
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Checkbox } from '@alicloudfe/components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    fixedSpan: 8
  },
  wrapperCol: {
    span: 14
  }
}

class Demo extends React.Component {
  handleSubmit = (values, errors) => {
    console.log('value & errors', values, errors)
  }

  render() {
    return (
      <Form style={{ width: '60%' }} {...formItemLayout} colon>
        <FormItem
          label="Username:"
          required
          requiredMessage="Please input your username!"
        >
          <Input name="baseUser" />
        </FormItem>
        <FormItem
          label="Password:"
          required
          requiredMessage="Please input your password!"
        >
          <Input.Password name="basePass" placeholder="Please Enter Password" />
        </FormItem>
        <FormItem label=" " colon={false}>
          <Checkbox name="agreement" defaultChecked>
            Agree
          </Checkbox>
        </FormItem>
        <FormItem label=" " colon={false}>
          <Form.Submit
            type="primary"
            validate
            onClick={this.handleSubmit}
            style={{ marginRight: 8 }}
          >
            Submit
          </Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </FormItem>
      </Form>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
