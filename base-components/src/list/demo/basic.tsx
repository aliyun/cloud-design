/**
 * @title 基本
 * @description 简单的列表展示。
 */

import * as React from 'react'
import styled from 'styled-components'

import { List, Avatar } from '@alicloudfe/components'

export default function DemoComponent() {
  return (
    <Style>
      <div style={{ width: 288 }}>
        <List size="small" header={<div>Notifications</div>}>
          <List.Item
            extra={'$20'}
            media={
              <Avatar
                src={
                  'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'
                }
              />
            }
            title="Title"
          >
            List Item 1
          </List.Item>
          <List.Item
            extra={'$20'}
            title="Title"
            media={
              <Avatar
                src={
                  'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'
                }
              />
            }
          >
            List Item 2
          </List.Item>
          <List.Item
            extra={'$20'}
            title="Title"
            media={
              <Avatar
                src={
                  'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'
                }
              />
            }
          >
            List Item 3
          </List.Item>
          <List.Item
            extra={'$20'}
            title="Title"
            media={
              <Avatar
                src={
                  'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'
                }
              />
            }
          >
            List Item 4
          </List.Item>
          <List.Item
            extra={'$20'}
            title="Title"
            media={
              <Avatar
                src={
                  'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'
                }
              />
            }
          >
            List Item 5
          </List.Item>
        </List>
      </div>
    </Style>
  )
}
const Style = styled.div``
