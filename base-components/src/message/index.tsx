import React from 'react'
import { Message as NextMessage } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { MessageProps } from '@alifd/next/types/message'
import { useCssVar } from '../utils/useCssVar'

type NextMessageProps = MessageProps & {
  // message附带额外的操作区，仅云效主题生效
  extra?: string | React.ReactNode
  // 操作区为单个string时，跳转a标签的属性
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
  // extra的位置，紧跟文字 或 右对齐，仅云效主题生效
  extraPlace?: 'left' | 'right'
}

const renderWithLink = (
  component: React.ReactNode,
  extra?: string | React.ReactNode,
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>,
  extraPlace?: 'left' | 'right'
) => {
  if (typeof extra === 'string') {
    return (
      <>
        {component}
        <a {...linkProps} className={`next-message-link ${extraPlace}`}>
          {extra}
        </a>
      </>
    )
  } else {
    return (
      <>
        {component}
        <span className={`next-message-extra ${extraPlace}`}>{extra}</span>
      </>
    )
  }
}

const Message: typeof NextMessage = React.forwardRef(
  (props: NextMessageProps, ref) => {
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    const { linkProps = {}, extraPlace = 'right', extra = '', ...others } = props
    if (theme.startsWith('yunxiao')) {
      const title =
        others.title && extra
          ? renderWithLink(others.title, extra, linkProps, extraPlace)
          : others.title
      const content =
        !others.title && extra
          ? renderWithLink(others.children, extra, linkProps, extraPlace)
          : others.children
      return (
        <NextMessage
          ref={ref as any}
          {...others}
          title={title}
          children={content}
        />
      )
    } else {
      return <NextMessage ref={ref as any} {...others} />
    }
  }
) as any

hoistNonReactStatics(Message, NextMessage)
export default Message
