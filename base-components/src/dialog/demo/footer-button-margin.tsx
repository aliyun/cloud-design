/**
 * @title footer按钮间距
 */

import React, { useState } from 'react'
import { Button, Dialog } from '@alicloudfe/components'

interface IProps {}

const FooterButtonDemo: React.FC<IProps> = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(true)
        }}
        type="primary"
      >
        Open dialog
      </Button>
      <Dialog
        title="Welcome to Alibaba.com"
        visible={visible}
        onOk={() => {
          setVisible(false)
        }}
        onCancel={() => {
          setVisible(false)
        }}
        onClose={() => {
          setVisible(false)
        }}
        footer={[
          <Button type="primary" loading={true}>
            custom ok
          </Button>,
          <Button>custom cancle</Button>
        ]}
      >
        Start your business here by searching a popular product
      </Dialog>
    </div>
  )
}

export default FooterButtonDemo
