import { Button as NextButton } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

type NextButtonProps = React.ComponentProps<typeof NextButton>

const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar)

const Button: typeof NextButton = React.forwardRef(
  (props: NextButtonProps, ref) => {
    const { children, className } = props
     // 判断是否是2-4个汉字
  if (typeof children === 'string' && isTwoToFourCNChar(children)) {
    return (
      <NextButton
        {...props}
        className={cls('isTwoToFourCNCharBtn', className)}
        ref={ref as any}
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
      <NextButton {...props} className={cls('isOnlyIcon', className)} ref={ref as any}>
        {children}
      </NextButton>
    )
  }
  return <NextButton {...props} className={className} ref={ref as any}>{children}</NextButton>
  }
)as any

hoistNonReactStatics(Button, NextButton)

export default Button;

// const exported: typeof NextButton = Button as any

// export default exported
