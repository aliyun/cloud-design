/**
 * @title 基本
 * @description 拉伸浏览器的时候label宽度不变。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Checkbox } from '@alife/alicloud-components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    fixedSpan: 10
  },
  wrapperCol: {
    span: 14
  }
}

class Demo extends React.Component {
  handleSubmit = (values) => {
    console.log('Get form value:', values)
  }

  render() {
    return (
      <Form style={{ width: '60%' }} {...formItemLayout}>
        <FormItem label="baseUsername:">
          <p>Fixed Name</p>
        </FormItem>
        <FormItem label="password:">
          <Input
            htmlType="password"
            name="basePass"
            placeholder="Please Enter Password"
          />
        </FormItem>
        <FormItem label="Note:" help="something">
          <Input.TextArea placeholder="something" name="baseRemark" />
        </FormItem>
        <FormItem label="Agreement:">
          <Checkbox name="baseAgreement" defaultChecked>
            Agree
          </Checkbox>
        </FormItem>
        <FormItem label=" ">
          <Form.Submit onClick={this.handleSubmit}>Confirm</Form.Submit>
        </FormItem>
      </Form>
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
const Style = styled.div``
