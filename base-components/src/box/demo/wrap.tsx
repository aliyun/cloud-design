/**
 * @title 折行
 * @description 默认不折行，可以通过设置 `wrap` 控制折行。 受浏览器限制，本功能支持到IE11+。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Box, Switch } from '@alicloudfe/components'

class BoxDemo extends React.Component {
  state = {
    wrap: true
  }
  onSwitchChange = (checked) => {
    this.setState({
      wrap: checked
    })
  }
  render() {
    return (
      <div className="list">
        <Switch
          style={{ width: 70 }}
          defaultChecked
          checkedChildren="wrap"
          onChange={this.onSwitchChange}
        />
        <div className="list-item">
          <Box spacing={20} wrap={this.state.wrap} direction="row">
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
            <div className="box-180-50" />
          </Box>
        </div>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <BoxDemo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .list {
    position: relative;
  }
  .list-item {
    position: relative;
    background: #ddd;
    border: 1px solid #eee;
    margin-bottom: 20px;
    min-height: 50px;
  }
  .box-180-50 {
    background: #5584ff;
    width: 180px;
    height: 50px;
  }
`
