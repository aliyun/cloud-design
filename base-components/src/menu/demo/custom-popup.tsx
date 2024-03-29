/**
 * @title 自定义弹出内容
 * @description 高级用法，可以通过 `Menu.PopupItem` 自定义菜单弹出内容。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Menu } from '@alicloudfe/components'

const { PopupItem } = Menu

class Demo extends React.Component {
  render() {
    const popupProps = {
      target: () => ReactDOM.findDOMNode(this),
      offset: [-1, 0],
      animation: false
    }

    return (
      <Menu className="my-custom-menu" popupProps={popupProps}>
        <PopupItem key="0" label="Popup item 1" triggerType="click">
          <div className="my-custom-content">Custom content 1</div>
        </PopupItem>
        <PopupItem key="1" label="Popup item 2">
          <div className="my-custom-content">Custom content 2</div>
        </PopupItem>
        <PopupItem key="2" label="Popup item 3">
          <div className="my-custom-content">Custom content 3</div>
        </PopupItem>
        <PopupItem key="3" label="Popup item 4">
          <div className="my-custom-content">Custom content 4</div>
        </PopupItem>
      </Menu>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div`
  .my-custom-menu {
    width: 200px;
    border: 1px solid #ccc;
    padding: 0;
    box-shadow: none;
    z-index: 1000;
  }

  .my-custom-content {
    width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
  }
`
