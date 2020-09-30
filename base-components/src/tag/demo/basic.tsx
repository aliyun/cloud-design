/**
 * @title 基本用法
 * @description 通过设置 `type` 属性来控制标签的展示类型，可选值包括：`normal`, `primary`
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag, Icon } from '@alife/alicloud-components'

const { Group: TagGroup } = Tag

export default function DemoComponent() {
  return (
    <Style>
      <div className="tag-list">
        <h4>large size</h4>
        <TagGroup>
          <Tag type="normal" size="large">
            Normal large Tag
          </Tag>
          <Tag type="primary" size="large">
            Primary large Tag
          </Tag>
          <Tag size="large">
            <Icon type="smile" /> Tag With Icon
          </Tag>
        </TagGroup>

        <h4>medium(default) size</h4>
        <TagGroup>
          <Tag type="normal" size="medium">
            Normal Tag
          </Tag>
          <Tag type="primary">Primary Tag</Tag>
          <Tag>
            <Icon type="smile" /> Tag With Icon
          </Tag>
        </TagGroup>

        <h4>small size</h4>
        <TagGroup>
          <Tag type="normal" size="small">
            Normal Small Tag
          </Tag>
          <Tag type="primary" size="small">
            Primary Small Tag
          </Tag>
          <Tag size="small">
            <Icon type="smile" /> Tag With Icon
          </Tag>
        </TagGroup>

        <h4>link tag</h4>
        <TagGroup>
          <Tag type="normal">
            <a href="//www.alibaba.com" target="_blank">
              normal Link Tag
            </a>
          </Tag>
          <Tag type="primary">
            <a href="//www.alibaba.com" target="_blank">
              primary Link Tag
            </a>
          </Tag>
          <Tag size="small">
            <a href="//www.alibaba.com" target="_blank">
              <Icon type="smile" /> Link Tag With Icon
            </a>
          </Tag>
        </TagGroup>
      </div>
    </Style>
  )
}
const Style = styled.div``
