import { Button as NextButton } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

import { withThemeClass } from '../utils/withThemeClass'
import { useCssVar } from '../utils/useCssVar'

type NextButtonProps = React.ComponentProps<typeof NextButton>

const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar)

const Button: typeof NextButton = withThemeClass(
  React.forwardRef((props: NextButtonProps, ref) => {
    const { children, className } = props
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    // 判断是否是2-4个汉字
    if (
      // xconsole相关主题不需要该功能
      theme !== 'wind' &&
      !theme.startsWith('xconsole') &&
      typeof children === 'string' &&
      isTwoToFourCNChar(children)
    ) {
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
        <NextButton
          {...props}
          className={cls('isOnlyIcon', className)}
          ref={ref as any}
        >
          {children}
        </NextButton>
      )
    }
    return (
      <NextButton {...props} className={className} ref={ref as any}>
        {children}
      </NextButton>
    )
  })
) as any

hoistNonReactStatics(Button, NextButton)

// @ts-ignore
Button.displayName = NextButton.displayName

export default Button
