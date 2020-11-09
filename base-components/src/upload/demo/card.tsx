/**
 * @title 卡片
 * @description 提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload } from '@alicloudfe/components'

function onPreview(info) {
  console.log('onPreview callback : ', info)
}

function onChange(info) {
  console.log('onChange callback : ', info)
}

function onSuccess(res, file) {
  console.log('onSuccess callback : ', res, file)
}

function onError(file) {
  console.log('onError callback : ', file)
}
export default function DemoComponent() {
  const content = (
    <Upload.Card
      listType="card"
      action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
      accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
      onPreview={onPreview}
      onChange={onChange}
      onSuccess={onSuccess}
      onError={onError}
      defaultValue={[
        {
          uid: '0',
          name: 'IMG.png',
          state: 'done',
          url:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          downloadURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        },
        {
          uid: '1',
          name: 'IMG.png',
          state: 'done',
          url:
            'https://gw.alicdn.com/tfs/TB1Y4ucuAL0gK0jSZFtXXXQCXXa-1020-510.jpg',
          downloadURL:
            'https://gw.alicdn.com/tfs/TB1Y4ucuAL0gK0jSZFtXXXQCXXa-1020-510.jpg',
          imgURL:
            'https://gw.alicdn.com/tfs/TB1Y4ucuAL0gK0jSZFtXXXQCXXa-1020-510.jpg'
        },
        {
          uid: '2',
          name: 'IMG.png',
          state: 'done',
          url:
            'https://img.alicdn.com/tfs/TB1Y8vPtKbviK0jSZFNXXaApXXa-216-460.png',
          downloadURL:
            'https://img.alicdn.com/tfs/TB1Y8vPtKbviK0jSZFNXXaApXXa-216-460.png',
          imgURL:
            'https://img.alicdn.com/tfs/TB1Y8vPtKbviK0jSZFNXXaApXXa-216-460.png'
        },
        {
          uid: '3',
          name: 'IMG.png',
          percent: 50,
          state: 'uploading',
          url:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          downloadURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        },
        {
          uid: '4',
          name: 'IMG.png',
          state: 'error',
          url:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          downloadURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        }
      ]}
    />
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
