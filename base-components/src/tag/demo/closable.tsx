/**
 * @title 可关闭标签
 * @description `Tag.Closeable` 可以用于一些轻量的需要选中状态的场景。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Tag } from '@alicloudfe/components'

const { Group: TagGroup, Closeable: CloseableTag } = Tag

const handler = (from) => {
  console.log(`close from ${from}`)
  return false
}

class Demo extends React.Component {
  renderTagList(option) {
    return [
      <CloseableTag key={'tag-1'} type={option.type}>
        {option.type}
      </CloseableTag>,
      <CloseableTag key={'tag-2'} type={option.type} disabled>
        {option.type} {' disabled '}
      </CloseableTag>
    ]
  }

  renderCloseAreaTags() {
    return ['tag', 'tail'].reduce(
      (prev, curr) =>
        prev.concat([
          <CloseableTag key={`tag-${curr}-1`} closeArea={curr}>
            closeArea {curr}
          </CloseableTag>,
          <CloseableTag key={`tag-${curr}-2`} type="primary" closeArea={curr}>
            closeArea {curr}
          </CloseableTag>
        ]),
      []
    )
  }
  render() {
    return (
      <div className="tag-list">
        <h4>type: 'normal'</h4>
        <TagGroup>{this.renderTagList({ type: 'normal' })}</TagGroup>
        <h4>type: 'primary'</h4>
        <TagGroup>{this.renderTagList({ type: 'primary' })}</TagGroup>
        <h4>closeArea: ['tag', 'tail']</h4>
        <TagGroup>{this.renderCloseAreaTags()}</TagGroup>
        <h4>close handler</h4>
        <TagGroup>
          <CloseableTag onClose={() => true}> onClose allow close</CloseableTag>
          <CloseableTag onClose={() => false}>
            {' '}
            onClose prevent close
          </CloseableTag>
          <CloseableTag onClose={handler}> onClose from </CloseableTag>
          <CloseableTag afterClose={() => console.log('after close')}>
            after Close
          </CloseableTag>
        </TagGroup>
        <h4>closeable link tag</h4>
        <TagGroup>
          <CloseableTag type="primary">
            <a href="//www.alibaba.com" target="_blank">
              Primary Link Tag
            </a>
          </CloseableTag>
          <CloseableTag type="normal">
            <a href="//www.alibaba.com" target="_blank">
              normal Link Tag
            </a>
          </CloseableTag>
        </TagGroup>
      </div>
    )
  }
}

export default function DemoComponent() {
  return (
    <Style>
      <Demo />
    </Style>
  )
}
const Style = styled.div``
