/**
 * @title rootElement
 * @description ConfigProvider配置rootElement
 */

import React, { useCallback, useRef } from 'react'
import { ConfigProvider } from '@alicloudfe/components'

function Child() {
  const rootElement = ConfigProvider.useRootElement()
  console.log('rootElement', rootElement)
  return <div>test</div>
}

function Demo() {
  const ref = useRef()
  const getRootElement = useCallback(() => ref.current, [])
  return (
    <ConfigProvider prefix="custom-" rootElement={getRootElement}>
      <div ref={ref}>
        <Child />
      </div>
    </ConfigProvider>
  )
}

export default Demo
