import { Button as NextButton } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

type NextButtonProps = React.ComponentProps<typeof NextButton>

const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar)

const Button: React.FC<NextButtonProps> = ({
  children,
  className,
  ...restProps
}) => {
  // 判断是否是2-4个汉字
  if (typeof children === 'string' && isTwoToFourCNChar(children)) {
    return (
      <NextButton
        className={cls('isTwoToFourCNCharBtn', className)}
        {...restProps}
      >
        {children}
      </NextButton>
    )
  }
  // 判断是否只有图标
  if (
    React.Children.count(children) === 1 &&
    (children as any)?.type?.displayName === 'Config(Icon)'
  ) {
    return (
      <NextButton className={cls('isOnlyIcon', className)} {...restProps}>
        {children}
      </NextButton>
    )
  }
  return <NextButton className={className} {...restProps}>{children}</NextButton>
}

hoistNonReactStatics(Button, NextButton)

const exported: typeof NextButton = Button as any

export default exported
