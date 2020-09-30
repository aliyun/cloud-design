/**
 * @title 无障碍
 * @description 按下Enter键调用`onSearch`事件去处理,请参考`ARIA and KeyBoard`。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Search } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <Search
          key="3"
          placeholder="Please enter the search content"
          onSearch={(v) => console.log(v)}
          searchText={<span>search</span>}
          style={{ width: '400px' }}
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
