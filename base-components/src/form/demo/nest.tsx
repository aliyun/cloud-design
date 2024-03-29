/**
 * @title 嵌套
 * @description FormItem 嵌套
 */

import * as React from 'react'
import styled from 'styled-components'

import { Form, Input, Grid } from '@alicloudfe/components'

const FormItem = Form.Item
const { Row, Col } = Grid

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 }
}

const insetLayout = {
  labelCol: { fixedSpan: 3 }
}

export default function DemoComponent() {
  const content = (
    <Form {...formItemLayout}>
      <FormItem id="control-input" label="Input Something：">
        <Row gutter="4">
          <Col>
            <FormItem
              style={{ margin: 0 }}
              label="Nest"
              labelAlign="inset"
              {...insetLayout}
              required
              requiredTrigger="onBlur"
              asterisk={false}
            >
              <Input placeholder="Please enter..." name="firstname" />
            </FormItem>
          </Col>
          <Col>
            <FormItem
              style={{ margin: 0 }}
              label="Nest"
              labelAlign="inset"
              {...insetLayout}
              required
              asterisk={false}
            >
              <Input placeholder="need onChange" name="secondname" />
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Bank Account：">
        <Row gutter="4">
          <Col>
            <FormItem required requiredTrigger="onBlur">
              <Input name="A" />
            </FormItem>
          </Col>
          <Col>
            <FormItem required requiredTrigger="onBlur">
              <Input name="B" />
            </FormItem>
          </Col>
          <Col>
            <FormItem required requiredTrigger="onBlur">
              <Input name="C" />
            </FormItem>
          </Col>
          <Col>
            <FormItem required requiredTrigger="onBlur">
              <Input name="D" />
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label=" ">
        <Form.Submit validate onClick={(v) => console.log(v)}>
          Submit
        </Form.Submit>
      </FormItem>
    </Form>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
