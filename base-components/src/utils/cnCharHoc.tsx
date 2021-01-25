// 判断button类组件是否是2-4汉字
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'

const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar)

const CNCHARHOC = <T extends any>(
  WrappedComponents: React.ComponentType<T>
): React.ComponentType<T> => {
  const Wrapper = React.forwardRef((props: any, ref) => {
    const { children, className } = props
    // 判断是否是2-4个汉字
    if (typeof children === 'string' && isTwoToFourCNChar(children)) {
      return (
        <WrappedComponents
          {...props}
          className={cls('isTwoToFourCNCharBtn', className)}
          ref={ref as any}
        >
          {children}
        </WrappedComponents>
      )
    }
    // 判断是否只有图标
    if (
      React.Children.count(children) === 1 &&
      (children as any)?.type?.displayName === 'Config(Icon)'
    ) {
      return (
        <WrappedComponents
          {...props}
          className={cls('isOnlyIcon', className)}
          ref={ref as any}
        >
          {children}
        </WrappedComponents>
      )
    }
    return (
      <WrappedComponents {...props} className={className} ref={ref as any}>
        {children}
      </WrappedComponents>
    )
  }) as React.ComponentType<T>
  hoistNonReactStatics(Wrapper, WrappedComponents)
  return Wrapper
}

export default CNCHARHOC
