/**
 * @title 提交上传
 * @description 通过按钮点击提交上传
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alife/alicloud-components'

class App extends React.Component {
  saveUploaderRef = (ref) => {
    this.uploaderRef = ref.getInstance()
  }

  onSubmit = () => {
    this.uploaderRef.startUpload()
  }
  beforeUpload(info, options) {
    console.log('beforeUpload callback : ', info, options)
    return options
  }
  render() {
    return (
      <div>
        <Upload
          action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
          autoUpload={false}
          ref={this.saveUploaderRef}
          listType="card"
          beforeUpload={this.beforeUpload}
          useDataURL
        >
          <Button>Upload</Button>
        </Upload>
        <br />
        <Button type="primary" onClick={this.onSubmit}>
          Submit
        </Button>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <App />
    </Style>
  )
}
const Style = styled.div``
