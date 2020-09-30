/**
 * @title 上传前预处理
 * @description 使用beforeUpload去控制上传行为
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alife/alicloud-components'

const requestOpts = {
  action:
    'https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload',
  data: { osstoken: 1234 },
  headers: { 'X-Requested-With': 12345 }
}

async function ajax() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(requestOpts)
    }, 1e3)
  })
}

function beforeUpload(file, options) {
  console.log('beforeUpload callback : ', file, options)
  return requestOpts
}

async function asyncBeforeUpload(file, options) {
  console.log('beforeUpload callback : ', file, options)
  return await ajax()
}

function onChange(file) {
  console.log('onChange callback : ', file)
}

export default function DemoComponent() {
  return (
    <Style>
      [
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={beforeUpload}
        onChange={onChange}
        key="1"
      >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
          Upload File
        </Button>
      </Upload>
      ,
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={asyncBeforeUpload}
        onChange={onChange}
        key="2"
      >
        <Button type="secondary" style={{ margin: '0 0 10px' }}>
          Async Call before Upload File
        </Button>
      </Upload>
      ,
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => false}
        onChange={onChange}
        key="3"
      >
        <Button type="normal" style={{ margin: '0 0 10px' }}>
          Prevent Upload
        </Button>
      </Upload>
      ,
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() =>
          new Promise((resl) => setTimeout(() => resl(false)))
        }
        onChange={onChange}
        key="4"
      >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
          Async Prevent Upload
        </Button>
      </Upload>
      ,
      <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => {}}
        onChange={onChange}
        key="5"
      >
        <Button type="secondary" style={{ margin: '0 0 10px' }}>
          Do nothing
        </Button>
      </Upload>
      ]
    </Style>
  )
}
const Style = styled.div``
