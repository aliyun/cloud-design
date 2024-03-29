/**
 * @title 自定义 loading
 * @description 自定义 `loading` 样式。
 */

import * as React from 'react'
import styled from 'styled-components'

import {
  List,
  Avatar,
  Button,
  Loading,
  Icon,
  Switch
} from '@alicloudfe/components'
import { useState } from 'react'

const data = [
  {
    title: 'A Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$20'
  },
  {
    title: 'B Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$10'
  },
  {
    title: 'Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$20'
  },
  {
    title: 'Title',
    img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
    money: '$20'
  }
]

const indicator = (
  <div>
    <Icon type="loading" />
  </div>
)

const CustomLoading = (props) => <Loading indicator={indicator} {...props} />

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div style={{ width: 288 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
        loading:{' '}
        <Switch
          style={{ marginLeft: 8 }}
          checked={loading}
          onChange={setLoading}
        />
      </div>
      <List
        size="small"
        loading={loading}
        loadingComponent={CustomLoading}
        header={<div>Notifications</div>}
        dataSource={data}
        renderItem={(item, i) => (
          <List.Item
            key={i}
            extra={item.money}
            title={item.title}
            media={<Avatar src={item.img} />}
          >
            List Item {i}
          </List.Item>
        )}
      />
    </div>
  )
}

export default function DemoComponent() {
  const content = <App />
  return <Style>{content}</Style>
}
const Style = styled.div``
