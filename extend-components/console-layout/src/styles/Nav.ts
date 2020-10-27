import React from 'react'
import { Icon } from '@alicloudfe/components'
import styled from 'styled-components'

const navWidth = 208
const navCollapsedWidth = 8
const triggerHeight = 34
const triggerWidth = 16
const iconWidth = 12
const evulsedWidth = 2

const calcWidth = (props: INavProps) =>
  props.collapsed ? navCollapsedWidth : navWidth
const calcOverflow = (props: INavProps) => (props.collapsed ? 'hidden' : 'auto')
const calcLeft = (props: INavProps) =>
  props.collapsed ? navCollapsedWidth - navWidth : 0
const getRotate = (props: INavCollapseTriggerProps) =>
  props.collapsed ? 180 : 0

const tiggerOpcity = (props: INavProps) => (props.collapsed ? 1 : 0)

interface INavProps {
  collapsed: boolean
}
interface INavCollapseTriggerProps {
  collapsed: boolean
}

export const NavChildenWrapper = styled.div`
  width: ${navWidth}px;
  min-width: ${navWidth}px;
`

const Nav = styled.div<INavProps>`
  order: 0;
  flex: 0 1 auto;
  height: 100%;
  background-color: var(--console-menu-bg, #fff);
  overflow-x: hidden;
  overflow-y: ${calcOverflow};
  width: ${calcWidth}px;
  min-width: ${calcWidth}px;
  position: relative;
  z-index: 100;
  border-right: 1px solid #c0c6cc;
  transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out;

  ${NavChildenWrapper} {
    position: relative;
    left: ${calcLeft}px;
    transition: left 0.3s ease-in-out;
  }
`

export const NavCollapseTriggerWrapper = styled.div`
  order: 0;
  flex: 0 1 auto;
  height: 100%;
  width: 0px;
  position: absolute;
  top: 0;
  opacity: ${tiggerOpcity};
  z-index: 101;
  left: ${calcWidth}px;
  transition: left 0.3s ease-in-out;
`

export const NavWrapper = styled.div`
  height: 100%;
  overflow-y: ${calcOverflow};
  width: ${calcWidth}px;
  min-width: ${calcWidth}px;
  transition: width 0.3s ease-in-out, min-width 0.3s ease-in-out;
  &:hover {
    ${NavCollapseTriggerWrapper} {
      opacity: 1;
    }
    box-shadow: var(--console-menu-box-shadow, 2px 0 4px 0 rgba(0, 0, 0, 0.16));
  }
`

export default Nav

export const NavCollapseTriggerIcon = styled(Icon)``

export const NavCollapseTrigger = styled.span<INavCollapseTriggerProps>`
  width: 0;
  height: ${triggerHeight}px;
  position: absolute;
  top: calc(50% - ${triggerHeight / 2}px);
  left: 0;
  z-index: 99;
  line-height: ${triggerHeight - 18}px;
  border: 1px solid #c0c6cc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border-left: ${triggerWidth}px solid #fff;
  cursor: pointer;
  color: #bfbfbf;
  transition: left 0.1s ease-in-out, border 0.1s ease;
  ${NavCollapseTriggerIcon} {
    top: 8px;
    width: ${iconWidth}px;
    position: relative;
    left: ${-(triggerWidth / 2) - iconWidth / 2}px;
    color: #c1c1c1;
    transform: rotate(${getRotate}deg);
    transition: transform 0.5s ease-in-out, left 0.1s ease-in-out;
  }
`

export const NavCollapseTriggerContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 24px;
  height: 34px;
  cursor: pointer;
  &:hover {
    ${NavCollapseTrigger} {
      border-left: ${triggerWidth + evulsedWidth}px solid #ebebeb;
      border-left-color: #eff3f8;
    }
  }
`
