/**
 * @title onCancel 和 onOk
 * @description 使用onCancel和onOk来默认展示关闭和确认按钮
 */

import React, { useState } from 'react';
import styled from 'styled-components'
import Drawer from '../index';
import { Button } from '@alicloudfe/components'

const Demo: React.FC = () => {

  const [visible, setVisible] = useState<boolean>(false);
  const closeHandle = () => {
    setVisible(false);
  }

  return (
    <>
      <Button type="primary" onClick={() => { setVisible(true) }}>打开具有确定和关闭操作的Drawer</Button>
      <Drawer
        visible={visible}
        size="small"
        title="具有确定和关闭操作的Drawer"
        onClose={closeHandle}
        onOk={closeHandle}
        onCancel={closeHandle}
      >
        <div>具有确定和关闭操作的Drawer</div>
      </Drawer>
    </>
  )
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``