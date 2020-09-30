/**
 * @title onAffix
 * @description 可以通过传入 `onAffix` 的事件回调函数来监听元素是否发生了固钉状态。该函数会在状态变化时返回固钉状态。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Affix, Button } from '@alicloudfe/components'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      affixed: false
    }
  }

  onAffix = (affixed) => {
    this.setState({
      affixed
    })
  }

  render() {
    const state = this.state

    return (
      <div className="affix-demo-wrapper">
        <Affix onAffix={this.onAffix}>
          <Button type="secondary">
            {state.affixed ? 'Affixed Button' : 'Unaffixed Button'}
          </Button>
        </Affix>
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
const Style = styled.div`
  .affix-demo-wrapper {
    padding: 40px 0;
  }
`
