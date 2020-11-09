/**
 * @title withContext
 * @description 通过 `Dialog.withContext(({ contextDialog }) => {} )`方法，封装 使用到函数式调用弹窗 的组件（例如业务组件或者当前App等），可以将 被封装组件 代码所在上下文的context注入到contextDialog中。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Button, Dialog, ConfigProvider } from '@alicloudfe/components'

const BeforeFix = () => {
  return (
    <div>
      <Button
        onClick={() => {
          Dialog.confirm({
            title: 'Dialog.confirm 命令式弹窗'
          })
        }}
      >
        使用 Dialog.confirm
      </Button>
    </div>
  )
}

const AfterFix = Dialog.withContext(({ contextDialog }) => {
  return (
    <div>
      <Button
        onClick={() => {
          contextDialog.confirm({
            title: 'Dialog.withContext 命令式弹窗'
          })
        }}
      >
        使用 Dialog.withContext
      </Button>
    </div>
  )
})

class Demo extends React.Component {
  render() {
    return (
      <div>
        <ConfigProvider
          locale={{
            Dialog: {
              close: '关闭（根组件文案）',
              ok: '确认（根组件文案）',
              cancel: '取消（根组件文案）'
            }
          }}
        >
          <ConfigProvider
            locale={{
              Dialog: {
                close: '关闭（局部文案）',
                ok: '确认（局部文案）',
                cancel: '取消（局部文案）'
              }
            }}
          >
            <div>
              <BeforeFix />
              <AfterFix />
            </div>
          </ConfigProvider>
        </ConfigProvider>
      </div>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
