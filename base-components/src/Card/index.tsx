import React from 'react'
import { Card as NextCard, Dropdown, Menu, Icon } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import ConfigProvider from '../config-provider'

interface IProps extends React.ComponentProps<typeof NextCard> {}

const Card: React.FC<IProps> & {
  Header: React.ComponentType<React.ComponentProps<typeof NextCard['Header']>>
  Content: React.ComponentType<React.ComponentProps<typeof NextCard['Content']>>
  Media: React.ComponentType<React.ComponentProps<typeof NextCard['Media']>>
  Actions: React.ComponentType<React.ComponentProps<typeof NextCard['Actions']>>
  Divider: React.ComponentType<React.ComponentProps<typeof NextCard['Divider']>>
  DropDownActions: React.FC<{
    actions: { label: React.ReactNode; onClick: () => void }[]
  }>
  CollapsableTail: React.FC<ICollapsableProps>
  CollapsableHead: React.FC<ICollapsableProps>
} = ((props) => {
  return <NextCard {...props} />
}) as any

hoistNonReactStatics(Card, NextCard)

Card.DropDownActions = ({ actions }) => {
  return (
    <Dropdown
      trigger={<Icon type="ellipsis-vertical" size="small" />}
      triggerType="click"
    >
      <Menu>
        {actions.map(({ label, onClick }, idx) => {
          return (
            <Menu.Item onClick={onClick} key={idx}>
              {label}
            </Menu.Item>
          )
        })}
      </Menu>
    </Dropdown>
  )
}

interface ICollapsableProps {
  collapsed: boolean
  onCollapsedChange: (newCollapsed: boolean) => void
}

const CollapsableTail: React.FC<ICollapsableProps & { prefix: string }> = ({
  collapsed,
  onCollapsedChange,
  prefix,
  children = '展开更多'
}) => {
  return (
    <div
      className={`${prefix}card-collapsable-tail`}
      onClick={() => onCollapsedChange(!collapsed)}
    >
      {children}
      {collapsed ? <Icon type="3212" /> : <Icon type="3213" />}
    </div>
  )
}

Card.CollapsableTail = ConfigProvider.config(CollapsableTail)

const CollapsableHead: React.FC<ICollapsableProps & { prefix: string }> = ({
  collapsed,
  onCollapsedChange,
  prefix,
  children = '标题'
}) => {
  return (
    <div
      className={`${prefix}card-collapsable-head`}
      onClick={() => onCollapsedChange(!collapsed)}
    >
      {children}
      {collapsed ? <Icon type="3212" /> : <Icon type="3213" />}
    </div>
  )
}

Card.CollapsableHead = ConfigProvider.config(CollapsableHead)


export default Card
