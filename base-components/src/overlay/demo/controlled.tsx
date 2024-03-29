/**
 * @title 受控显示隐藏
 * @description 展示了 `Popup` 受控显示隐藏的用法。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Overlay, Button } from '@alicloudfe/components'

const { Popup } = Overlay

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  onVisibleChange = (visible) => {
    this.setState({
      visible
    })
  }

  onGroupVisibleChange = (groupVisible) => {
    this.setState({
      groupVisible
    })
  }

  render() {
    return (
      <div>
        <div>
          <Popup
            trigger={<Button>Open</Button>}
            triggerType="click"
            visible={this.state.visible}
            onVisibleChange={this.onVisibleChange}
          >
            <span className="overlay-demo">Hello World From Popup!</span>
          </Popup>
        </div>
        <br />
        <div>
          <Popup
            trigger={
              <Button
                style={{ marginRight: '50px' }}
                ref={(ref) => {
                  this.btn1 = ref
                }}
              >
                Paired Popup 1
              </Button>
            }
            triggerType="click"
            visible={this.state.groupVisible}
            safeNode={[() => this.btn2, () => this.overlay2]}
            onVisibleChange={this.onGroupVisibleChange}
          >
            <span
              className="overlay-demo"
              ref={(ref) => {
                this.overlay1 = ref
              }}
            >
              Hello World From Popup!
            </span>
          </Popup>
          <Popup
            trigger={
              <Button
                ref={(ref) => {
                  this.btn2 = ref
                }}
              >
                Paired Popup 2
              </Button>
            }
            triggerType="click"
            visible={this.state.groupVisible}
            safeNode={[() => this.btn1, () => this.overlay1]}
            onVisibleChange={this.onGroupVisibleChange}
          >
            <span
              className="overlay-demo"
              ref={(ref) => {
                this.overlay2 = ref
              }}
            >
              Hello World From Popup!
            </span>
          </Popup>
        </div>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
  }
`
