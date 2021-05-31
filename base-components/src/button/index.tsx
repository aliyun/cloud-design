import { Button as NextButton } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

import { withThemeClass } from '../utils/withThemeClass'
import { useCssVar } from '../utils/useCssVar'

type NextButtonProps = React.ComponentProps<typeof NextButton>

const rxTwoToThreeCNChar = /^[\u4e00-\u9fa5]{2,3}$/
const rxFourCNChar = /^[\u4e00-\u9fa5]{4}$/

const isTwoToThreeCNChar = rxTwoToThreeCNChar.test.bind(rxTwoToThreeCNChar)
const isFourCNChar = rxFourCNChar.test.bind(rxFourCNChar)

const Button: typeof NextButton = withThemeClass(
  React.forwardRef((props: NextButtonProps, ref) => {
    const { children, className } = props
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    // 判断是否是2-3个汉字
    if (
      // xconsole相关主题不需要该功能
      theme !== 'wind' &&
      !theme.startsWith('xconsole') &&
      typeof children === 'string' &&
      isTwoToThreeCNChar(children)
    ) {
      return (
        <NextButton
          {...props}
          className={cls('isTwoToThreeCNCharBtn', className)}
          ref={ref as any}
        >
          {children}
        </NextButton>
      )
    }
    // 判断是否是4个汉字
    if (
      // xconsole相关主题不需要该功能
      theme !== 'wind' &&
      !theme.startsWith('xconsole') &&
      typeof children === 'string' &&
      isFourCNChar(children)
    ) {
      return (
        <NextButton
          {...props}
          className={cls('isFourCNCharBtn', className)}
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
