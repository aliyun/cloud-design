/**
 * @title 分页类型
 * @description 可以通过指定 `type` 属性来设置分页的类型。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alife/alicloud-components'

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <h3>normal</h3>
        <Pagination defaultCurrent={2} />
        <h3>simple</h3>
        <Pagination defaultCurrent={2} type="simple" />
        <h3>mini</h3>
        <Pagination defaultCurrent={2} type="mini" />
      </div>
    </Style>
  )
}
const Style = styled.div``
