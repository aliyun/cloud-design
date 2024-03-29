/**
 * @title label作为校验提示
 * @description 使用 label 作为校验提示
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Radio } from '@alicloudfe/components'

const FormItem = Form.Item
const RadioGroup = Radio.Group

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

class Demo extends React.Component {
  render() {
    return (
      <Form {...formItemLayout} useLabelForErrorMessage colon>
        <FormItem label="Account" required>
          <Input placeholder="Input frank" name="valUsername" />
        </FormItem>
        <FormItem
          label="Email"
          required
          requiredTrigger="onBlur"
          format="email"
        >
          <Input
            placeholder="Both trigget onBlur and onChange"
            name="valEmail"
          />
        </FormItem>

        <FormItem
          label="Password"
          hasFeedback
          required
          requiredMessage="Please enter password"
        >
          <Input htmlType="password" name="valPasswd" />
        </FormItem>

        <FormItem
          label="Gender"
          hasFeedback
          required
          requiredMessage="Please select your gender"
        >
          <RadioGroup name="valSex">
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          label="Remarks"
          required
          requiredMessage="Really do not intend to write anything?"
        >
          <Input.TextArea
            maxLength={20}
            showLimitHint
            placeholder="Everything is ok!"
            name="valTextarea"
          />
        </FormItem>

        <FormItem wrapperCol={{ offset: 6 }}>
          <Form.Submit
            validate
            type="primary"
            onClick={(v, e) => console.log(v, e)}
            style={{ marginRight: 10 }}
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
