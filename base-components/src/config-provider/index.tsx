import React, { useLayoutEffect, useMemo, useState } from 'react'
import { ConfigProvider as NextConfigProvider } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'

import ctx, { useRootElement } from './ctx'

interface IProps extends React.ComponentProps<typeof NextConfigProvider> {
  rootElement?: HTMLElement | (() => HTMLElement)
}

const ConfigProvider: React.FC<IProps> & {
  config(Component: any, options?: any): any
  getContextProps(props: {}, displayName: string): any
  initLocales(locales: any): any
  setLanguage(language: string): any
  setLocale(locale: any): any
  setDirection(dir: string): any
  getLocale(): any
  getLanguage(): string
  getDirection(): string
  useRootElement(): HTMLElement
} = (({ rootElement: rootElementGetter, ...rest }) => {
  const actualRootElement = useGetRootElement(rootElementGetter)
  const ctxValue = useMemo(() => {
    return {
      rootElement: actualRootElement
    }
  }, [actualRootElement])
  return (
    <ctx.Provider value={ctxValue}>
      {/* 默认popupContainer为应用根节点 */}
      <NextConfigProvider popupContainer={actualRootElement} {...rest} />
    </ctx.Provider>
  )
}) as any

ConfigProvider.displayName = 'ExtendedConfigProvider'
ConfigProvider.useRootElement = useRootElement

hoistNonReactStatics(ConfigProvider, NextConfigProvider)

export default ConfigProvider

/**
 * 获取微应用根元素
 */
function useGetRootElement(
  getter?: HTMLElement | (() => HTMLElement)
): HTMLElement {
  const [rootElement, setRootElement] = useState(() => getRootElement(getter))
  // 在初次渲染的时候，rootElement可能还没渲染，因此需要在effect中再获取一次
  useLayoutEffect(() => {
    setRootElement(getRootElement(getter))
  }, [getter])

  return rootElement
}

function getRootElement(getter?: HTMLElement | (() => HTMLElement)) {
  let result = getter ?? document.body
  if (typeof result === 'function') {
    try {
      result = result() ?? document.body
    } catch (error) {
      result = document.body
    }
  }
  return result
}
