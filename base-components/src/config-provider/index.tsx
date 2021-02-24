import React, {
  useLayoutEffect,
  useMemo,
  useState,
  useContext,
  useRef
} from 'react'
import { ConfigProvider as NextConfigProvider } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'

import ctx from './ctx'

const refElementStyle: React.CSSProperties = {
  width: 0,
  height: 0
}

const ConfigProvider: typeof NextConfigProvider & {
  useRefElement: typeof useRefElement
} = ((props) => {
  const ref = useRef(document.body as HTMLElement)
  const [refElement, setRefElement] = useState(ref.current)
  // 在初次渲染的时候，refElement还没渲染，因此需要在effect中再获取一次
  useLayoutEffect(() => {
    setRefElement(ref.current)
  }, [])
  // 让ConfigProvider内部的组件，都可以拿到ConfigProvider位置的元素
  // 从而可以从这个元素读取cssVar
  const ctxValue = useMemo(() => {
    return {
      refElement
    }
  }, [refElement])
  return (
    <ctx.Provider value={ctxValue}>
      <NextConfigProvider {...props} />
      <div
        className="next-css-var-ref-element"
        style={refElementStyle}
        ref={ref as any}
      />
    </ctx.Provider>
  )
}) as any

;(ConfigProvider as any).displayName = 'ExtendedConfigProvider'
ConfigProvider.useRefElement = useRefElement

hoistNonReactStatics(ConfigProvider, NextConfigProvider)

export default ConfigProvider

/**
 * 获取微应用根元素
 */
function useRefElement(): HTMLElement {
  return useContext(ctx)?.refElement ?? document.body
}
