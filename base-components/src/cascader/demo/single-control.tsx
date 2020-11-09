/**
 * @title 设置是否只能选择叶子项
 * @description 展示受控单选以及是否只能选择叶子项的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Checkbox, Cascader } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null,
      canOnlySelectLeaf: false,
      data: []
    }

    this.handleCheck = this.handleCheck.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data, value: '2975' }))
      .catch((e) => console.log(e))
  }

  handleCheck() {
    this.setState({
      canOnlySelectLeaf: !this.state.canOnlySelectLeaf,
      value: null
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
      <div className="control-single-demo">
        <label className="leaf-check">
          <Checkbox
            value={this.state.canOnlySelectLeaf}
            onChange={this.handleCheck}
          />
          <span className="leaf-text">Enable canOnlySelectLeaf</span>
        </label>
        <Cascader
          canOnlySelectLeaf={this.state.canOnlySelectLeaf}
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
  .control-single-demo .leaf-check {
    display: block;
    margin-bottom: 10px;
  }

  .control-single-demo .leaf-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
