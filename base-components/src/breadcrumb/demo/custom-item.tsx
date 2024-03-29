/**
 * @title 自定义节点
 * @description 可以自定义面包屑的节点，比如 react 路由。
 */

import * as React from 'react'
import styled from 'styled-components'

import { Breadcrumb } from '@alicloudfe/components'
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom'

export default function DemoComponent() {
  const content = (
    <HashRouter>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/categories">All Categories</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/categories/shirts">Shirts</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Shirt 78，999</Breadcrumb.Item>
      </Breadcrumb>
      <Switch>
        <Route path="/categories/shirts" render={() => <span>Shirts</span>} />
        <Route path="/categories" render={() => <span>All Categories</span>} />
        <Route path="/" render={() => <span>Home</span>} />
      </Switch>
    </HashRouter>
  )
  return <Style>{content}</Style>
}
const Style = styled.div``
