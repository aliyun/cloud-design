/**
 * @title 图标按钮
 * @description `Button` 可以嵌入 `Icon`，默认情况下 `Icon` 尺寸自动跟随 `Button` 的尺寸，可以通过 `iconSize` 属性进行设置。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Icon, Box } from '@alicloudfe/components'

class LoadingIcon extends React.Component {
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
      <Box direction="row" spacing={20}>
        <Button
          type="secondary"
          iconSize="xs"
          loading
          icons={{
            loading: <Icon type="loading" style={{ color: 'orange' }} />
          }}
        >
          Custom loading icon
        </Button>
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.setLoading}
          icons={{
            loading: <Icon type="loading" style={{ color: 'orange' }} />
          }}
        >
          Click to loading and show loading icon
        </Button>
      </Box>
    )
  }
}

export default function DemoComponent() {
  const content = (
    <div>
      <Box direction="row" spacing={20}>
        <Button>
          <Icon type="atm" /> ATM
        </Button>
        <Button text>
          <Icon type="atm" /> ATM
        </Button>
        <Button warning>
          <Icon type="atm" /> ATM
        </Button>
        <Button iconSize="xxs">
          <Icon type="arrow-left" /> ARROW
        </Button>
      </Box>
      <br />
      <LoadingIcon />
    </div>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
