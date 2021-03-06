/**
 * @title 事件
 * @description 1. 所有的Panel不传入Key,自动分配key为index
 */

import * as React from 'react'
import styled from 'styled-components'

import { Collapse } from '@alicloudfe/components'

const Panel = Collapse.Panel

class Demo extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      expandedKeys: []
    }
  }

  onExpand(expandedKeys) {
    this.setState({
      expandedKeys
    })
  }

  onClick(key) {
    console.log('clicked', key)
  }
  render() {
    return (
      <Collapse
        onExpand={this.onExpand.bind(this)}
        expandedKeys={this.state.expandedKeys}
      >
        <Panel title="simple tile" onClick={this.onClick}>
          <ul>
            <li>Promotions are marketing campaigns ran by Marketplace</li>
            <li>
              Participate to sale your products during that promotion and make a
              profit
            </li>
          </ul>
        </Panel>
        <Panel title="What are Promotion Products?">
          <ul>
            <li>
              Promotion Products is a service that helps you to promote products
              you list on Marketplace during a certain time range
            </li>
            <li>
              You can choose which products should be available for the
              promotion
            </li>
            <li>
              Not all Products of you will be available, because Promotions will
              only attract certain Product areas
            </li>
          </ul>
        </Panel>
        <Panel title="Why can i not submit a higher price?">
          <ul>
            <li>
              The Promotion requires a certain price to make sure that our
              customers are attracted
            </li>
          </ul>
        </Panel>
        <Panel title="What is Promo Stock?">
          Promo Stock is the criteria needed to be followed to be able to join
          Promotion. With setting particular Promo Stock value you commit to
          have this amount of stock available while Promotion is active.
        </Panel>
      </Collapse>
    )
  }
}

export default function DemoComponent() {
  const content = <Demo />
  return <Style>{content}</Style>
}
const Style = styled.div``
