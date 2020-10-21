import React from 'react'
import { MultiLines } from '@alicloudfe/components-truncate'
import { FakeBrowserWithWrapper as FakeBrowser } from '@alicloudfe/components-fake-browser'

const longText = '毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。'.repeat(
  10
)

const Demo = () => {
  return (
    <FakeBrowser>
      <MultiLines lines={2} ellipsis={<span>...</span>}>
        {longText}
      </MultiLines>
    </FakeBrowser>
  )
}

export default Demo
