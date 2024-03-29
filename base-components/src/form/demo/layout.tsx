/**
 * @title 布局
 * @description inline 布局只支持横排
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Field, Input, Radio, Switch } from '@alicloudfe/components'

function handleSubmit(v) {
  console.log(v)
}

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 }
}

const App = () => {
  const field = Field.useField({
    autoUnmount: false,
    values: { inline: false, labelAlign: 'left' }
  })
  const inline = field.getValue('inline')
  const labelAlign = inline ? 'left' : field.getValue('labelAlign')
  const layout = inline ? {} : formItemLayout

  return (
    <Form field={field} inline={inline} labelAlign={labelAlign} {...layout}>
      <Form.Item label="Inline Layout">
        <Switch name="inline" />
      </Form.Item>

      {inline ? null : (
        <Form.Item label="Label align">
          <Radio.Group shape="button" name="labelAlign">
            <Radio value="left">left</Radio>
            <Radio value="top">top</Radio>
            <Radio value="inset">inset</Radio>
          </Radio.Group>
        </Form.Item>
      )}

      <Form.Item label="Username:">
        <Input name="inlineUser" placeholder="first" />
      </Form.Item>
      <Form.Item label="Password:" hasFeedback={false}>
        <Input.Password
          name="inlinePass"
          placeholder="Please enter your password!"
        />
      </Form.Item>

      <Form.Item label=" ">
        <Form.Submit onClick={handleSubmit}>Submit</Form.Submit>
      </Form.Item>
    </Form>
  )
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
