/**
 * @title 自定义空内容
 * @description 自定义无数据时展示的内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { List, Avatar, Button } from '@alicloudfe/components'

export default function DemoComponent() {
  const content = (
    <div style={{ width: 288 }}>
      <List
        size="small"
        emptyContent={
          <div>
            <img
              style={{ width: '50%' }}
              src="https://unpkg.com/@icedesign/empty-content-block@3.0.1/build/assets/dea7e80386f12f4cf023018d9b0c7515.png"
            />
            <br />
            暂无内容
          </div>
        }
        header={<div>Notifications</div>}
        dataSource={[]}
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
  return <Style>{content}</Style>
}
const Style = styled.div``
