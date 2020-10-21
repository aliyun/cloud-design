/**
 * @title 空状态
 * @description 无数据时候的列表展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { List, Avatar, Button } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div style={{ width: 288 }}>
        <List
          size="small"
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
    </Style>
  )
}
const Style = styled.div``
