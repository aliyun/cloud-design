/**
 * @title 设置父子节点选中是否关联
 * @description 展示受控多选以及是否开启严格受控父子节点选中不再关联的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, CascaderSelect } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: [],
      data: [],
      checkStrictly: false
    }

    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data, value: ['2975'] }))
      .catch((e) => console.log(e))
  }

  handleCheck() {
    this.setState({
      checkStrictly: !this.state.checkStrictly,
      value: []
    })
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)

    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="control-multiple-demo">
        <label className="strictly-check">
          <Checkbox
            value={this.state.checkStrictly}
            onChange={this.handleCheck}
          />
          <span className="strictly-text">Enable checkStrictly</span>
        </label>
        <CascaderSelect
          style={{ width: '302px' }}
          multiple
          checkStrictly={this.state.checkStrictly}
          value={this.state.value}
          dataSource={this.state.data}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .control-multiple-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-multiple-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
