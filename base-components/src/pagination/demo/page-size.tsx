/**
 * @title 每页显示
 * @description 可以通过设置 `pageSize` 属性来指定每页显示的数量。<br>
 */

import * as React from 'react'
import styled from 'styled-components'

import { Pagination } from '@alife/alicloud-components'

const handlePageSizeChange = (size) => console.log(size)

export default function DemoComponent() {
  return (
    <Style>
      <div>
        <h3>To hidden per page size selector</h3>
        <Pagination pageSizeSelector={false} />
        <h3>
          Type per page size selector of is dropdown，and as for the tail of the
          entire component
        </h3>
        <Pagination
          pageSizeSelector="dropdown"
          pageSizePosition="end"
          onPageSizeChange={handlePageSizeChange}
        />
        <h3>Filter type per page size selector, and use floating layout</h3>
        <Pagination
          pageSizeSelector="filter"
          onPageSizeChange={handlePageSizeChange}
          useFloatLayout
        />
      </div>
    </Style>
  )
}
const Style = styled.div``
