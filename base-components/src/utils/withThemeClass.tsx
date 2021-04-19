import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import cls from 'classnames'
import { useCssVar } from './useCssVar'

export function withThemeClass<T>(Comp: T) {
  // 使用useCssVar为它动态添加类名
  const Wrapped: React.FC<{ className?: string }> = React.forwardRef(
    (props, ref) => {
      const theme = useCssVar('--alicloudfe-components-theme')
      // 判断属于哪个类型主题
      const isWind = theme.trim() === 'wind'
      const isHybridcloud = theme.trim().startsWith('hybridcloud')
      const isYunxiao = theme.trim().startsWith('yunxiao')
      return (
        // @ts-ignore
        <Comp
          {...props}
          ref={ref}
          className={cls(props.className, {
            ['is-wind']: isWind,
            ['is-hybridcloud']: isHybridcloud,
            ['is-yunxiao']: isYunxiao,
          })}
        />
      )
    }
  )
  hoistNonReactStatics(Wrapped, Comp as any)
  return (Wrapped as any) as T
}
