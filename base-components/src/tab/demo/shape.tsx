/**
 * @title 形态
 * @description 根据使用场景及触发控件的类型，可以通过 `shape` 属性配置选项卡的类型，主要包括：
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tab, Radio } from '@alicloudfe/components'

function onChange(key) {
  console.log(key)
}

const Demo = () => {
  const [shape, setShape] = React.useState('pure')

  return (
    <div>
      shape:{' '}
      <Radio.Group shape="button" value={shape} onChange={setShape}>
        <Radio value="pure">pure</Radio>
        <Radio value="wrapped">wrapped</Radio>
        <Radio value="text">text</Radio>
        <Radio value="capsule">capsule</Radio>
      </Radio.Group>
      <br />
      <br />
      <Tab shape={shape} onChange={onChange}>
        <Tab.Item key="home" title="Home">
          This is home page
        </Tab.Item>
        <Tab.Item key="document" title="Document">
          This is document page
        </Tab.Item>
        <Tab.Item key="api" title="API">
          This is api page
        </Tab.Item>
        <Tab.Item key="repo" title="Repo">
          This is repo link
        </Tab.Item>
      </Tab>
    </div>
  )
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
