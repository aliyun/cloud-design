import React, { useLayoutEffect, useMemo, useState, useContext } from 'react'
import { ConfigProvider as NextConfigProvider } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'

import ctx from './ctx'

interface IProps extends React.ComponentProps<typeof NextConfigProvider> {
  /**
   * 在fusion基础上再增加一个config，配置rootElement，微应用的根容器
   * 之所以不使用fusion原生的popupContainer，
   * 是因为不希望扩展popupContainer的语义，造成兼容性问题，
   * 我们通过rootElement，不仅能控制popupContainer，还能控制更多微前端相关的行为
   */
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
  /**
   * 在fusion基础上扩展的api，获取rootElement，微应用的根容器
   */
  useRootElement(): HTMLElement
  useRootElementGetter(): HTMLElement | (() => HTMLElement) | undefined
} = (({ rootElement, popupContainer, ...rest }) => {
  const ctxValue = useMemo(() => {
    return {
      // 如果用户传了popupContainer，也可以将它作为rootElement
      rootElementGetter: rootElement ?? popupContainer
    }
  }, [rootElement, popupContainer])
  return (
    <ctx.Provider value={ctxValue}>
      {/* 默认popupContainer为应用根节点 */}
      <NextConfigProvider
        popupContainer={ctxValue.rootElementGetter}
        {...rest}
      />
    </ctx.Provider>
  )
}) as any

ConfigProvider.displayName = 'ExtendedConfigProvider'
ConfigProvider.useRootElement = useRootElement
ConfigProvider.useRootElementGetter = useRootElementGetter

hoistNonReactStatics(ConfigProvider, NextConfigProvider)

export default ConfigProvider

/**
 * 获取微应用根元素
 */
function useRootElement(): HTMLElement {
  const getter:
    | HTMLElement
    | (() => HTMLElement)
    | undefined = useRootElementGetter()
  const [rootElement, setRootElement] = useState(() =>
    resolveRootElementGetter(getter)
  )
  // 在初次渲染的时候，rootElement可能还没渲染，因此需要在effect中再获取一次
  useLayoutEffect(() => {
    setRootElement(resolveRootElementGetter(getter))
  }, [getter])
  return rootElement
}

function useRootElementGetter(): HTMLElement | (() => HTMLElement) | undefined {
  return useContext(ctx)?.rootElementGetter
}

/**
 * 执行 RootElementGetter ，获取实际 RootElement
 */
function resolveRootElementGetter(getter?: HTMLElement | (() => HTMLElement)) {
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
