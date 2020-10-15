/**
 * @title 加载中
 * @description 通过设置 `loading` 属性即可以让按钮处于加载状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loading: false
    }
  }

  setLoading = () => {
    this.setState({ loading: true })
  }

  render() {
    return (
      <div>
        <Button type="secondary" loading>
          Loading
        </Button>
        &nbsp;&nbsp;
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.setLoading}
        >
          Click to loading
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div``
