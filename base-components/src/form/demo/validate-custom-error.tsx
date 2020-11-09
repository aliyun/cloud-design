/**
 * @title 校验(自定义错误)
 * @description 基本的表单校验例子。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Field } from '@alicloudfe/components'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

class BasicDemo extends React.Component {
  field = new Field(this)

  render() {
    const {
      field,
      field: { init }
    } = this
    return (
      <Form {...formItemLayout} field={field}>
        <Form.Item label="test" key="test2">
          <Input
            {...init('input', {
              rules: [
                {
                  validator(_rule, value, callback) {
                    callback(
                      <span>
                        This is a <em>CUSTOM</em> error
                      </span>
                    )
                  }
                }
              ]
            })}
          />
        </Form.Item>
        <FormItem wrapperCol={{ offset: 6 }}>
          <Form.Submit validate type="primary">
            Submit
          </Form.Submit>
          <Form.Reset>Reset</Form.Reset>
        </FormItem>
      </Form>
    )
  }
}

export default function DemoComponent() {
  const content = <BasicDemo />
  return <Style>{content}</Style>
}
const Style = styled.div``
