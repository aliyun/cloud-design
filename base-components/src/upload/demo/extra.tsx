/**
 * @title 额外内容
 * @description 提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alicloudfe/components'

const extraRender = (file) => {
  console.log(file)
  return <Button style={{ marginLeft: 4 }}>extra</Button>
}

function beforeUpload(info) {
  console.log('beforeUpload callback : ', info)
}

function onChange(info) {
  console.log('onChange callback : ', info)
}
export default function DemoComponent() {
  return (
    <Style>
      (
      <Upload
        listType="image"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={beforeUpload}
        onChange={onChange}
        extraRender={extraRender}
        defaultValue={[
          {
            name: 'IMG.png',
            state: 'done',
            size: 100,
            url:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
          }
        ]}
      >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
          Upload File
        </Button>
      </Upload>
      )
    </Style>
  )
}
const Style = styled.div``
