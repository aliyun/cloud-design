import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'
import { useCssVar } from './useCssVar'

export function withThemeClass<T>(Comp: T) {
  // 使用useCssVar为它动态添加类名
  const Wrapped: React.FC<{ className?: string }> = (props) => {
    const theme = useCssVar('--alicloudfe-components-theme')
    const isWind = theme.trim() === 'wind'
    return (
      // @ts-ignore
      <Comp
        {...props}
        className={cls(props.className, {
          ['is-wind']: isWind
        })}
      />
    )
  }
  hoistNonReactStatics(Wrapped, Comp as any)
  return (Wrapped as any) as T
}
