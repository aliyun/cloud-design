/**
 * @title 文件校验
 * @description afterSelect仅在 autoUpload=false 的时候生效
 */

import * as React from 'react'
import styled from 'styled-components'

import { Upload, Button } from '@alicloudfe/components'

class App extends React.Component {
  saveUploaderRef = (ref) => {
    this.uploaderRef = ref.getInstance()
  }

  onSubmit = () => {
    this.uploaderRef.startUpload()
  }
  afterSelect(file) {
    console.log(file)
    return true // return false will trigger onError warning & prevent upload
  }
  render() {
    return (
      <div>
        <Upload
          action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
          autoUpload={false}
          ref={this.saveUploaderRef}
          listType="text"
          afterSelect={this.afterSelect}
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
