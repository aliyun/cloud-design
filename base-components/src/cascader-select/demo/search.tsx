/**
 * @title 搜索
 * @description 通过设置 showSearch 为 true，可以开启组件的搜索功能。
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
      multiple: false
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
      multiple: !this.state.multiple,
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
      <div className="search-demo">
        <label className="multiple-check">
          <Checkbox value={this.state.multiple} onChange={this.handleCheck} />
          <span className="multiple-text">Multiple select</span>
        </label>
        <CascaderSelect
          style={{ width: '302px' }}
          showSearch
          multiple={this.state.multiple}
          value={this.state.value}
          dataSource={this.state.data}
          onChange={this.handleChange}
        />
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
  .search-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
  }

  .search-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
  }
`
