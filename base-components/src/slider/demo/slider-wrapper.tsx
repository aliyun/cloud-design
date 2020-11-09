/**
 * @title 外部控制
 * @description 用户可以包装 Slider 组件，以便进行外部控制。例如通过包装组件实现外部对 Slider 组件 `autoplay` 和 `autoplaySpeed` 值的控制。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Slider, Select } from '@alicloudfe/components'

const { Option } = Select

class SliderWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      autoplay: false,
      autoplaySpeed: 1000
    }
  }

  onSelectAutoplay(value) {
    this.setState({ autoplay: value })
  }

  onSelectAutoplaySpeed(value) {
    this.setState({ autoplaySpeed: value })
  }

  render() {
    return (
      <div>
        <Select
          placeholder="Autoplay"
          onChange={this.onSelectAutoplay.bind(this)}
        >
          <Option value>True</Option>
          <Option value={false}>False</Option>
        </Select>
        &nbsp;&nbsp;
        <Select
          placeholder="Autoplay Speed"
          onChange={this.onSelectAutoplaySpeed.bind(this)}
        >
          <Option value={1000}>1 second</Option>
          <Option value={2000}>2 seconds</Option>
          <Option value={3000}>3 seconds</Option>
        </Select>
        <br />
        <br />
        <Slider
          autoplay={this.state.autoplay}
          autoplaySpeed={this.state.autoplaySpeed}
        >
          <div>
            <h3 className="h3">1</h3>
          </div>
          <div>
            <h3 className="h3">2</h3>
          </div>
          <div>
            <h3 className="h3">3</h3>
          </div>
          <div>
            <h3 className="h3">4</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <SliderWrapper />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .next-slick .h3,
  .h4 {
    background: #4f74b3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`
