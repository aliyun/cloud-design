/**
 * @title 自定义值渲染
 * @description 通过`valueRender`自定值渲染。
 */

import * as React from 'react'
import styled from 'styled-components'

import { CascaderSelect } from '@alicloudfe/components'
import 'whatwg-fetch'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
      .then((response) => response.json())
      .then((data) => {
        data[1].disabled = true
        this.setState({ data })
      })
      .catch((e) => console.log(e))
  }

  handleChange(value, data, extra) {
    console.log(value, data, extra)
  }

  valueRender = (item) => {
    if (item.label) {
      return item.label // 正常的item
    }

    // value在 dataSouce里不存在时渲染。
    return item.value === '432988' ? '不存在的值' : item.value
  }

  render() {
    return (
      <CascaderSelect
        valueRender={this.valueRender}
        defaultValue="432988"
        dataSource={this.state.data}
        onChange={this.handleChange}
      />
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
