/**
 * @title 大小限制
 * @description 提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Dialog, Button } from '@alife/alicloud-components'

const beforeUpload = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        if (img.width <= 1200) {
          resolve()
        } else {
          Dialog.alert({
            content: `Image width ${img.width}px, Exceed limits！`,
            closable: false,
            title: 'Warning'
          })
          reject()
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}

export default function DemoComponent() {
  return (
    <Style>
      (
      <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        limit={3}
        multiple
        beforeUpload={beforeUpload}
        listType="text"
        defaultValue={[
          {
            name: 'IMG.png',
            state: 'done',
            size: 1024,
            downloadURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            fileURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL:
              'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
          }
        ]}
      >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
          Upload file
        </Button>
      </Upload>
      )
    </Style>
  )
}
const Style = styled.div``
