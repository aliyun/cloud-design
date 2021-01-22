import { createContext, useContext, useLayoutEffect, useState } from 'react'

export interface ICtxType {
  rootElement?: HTMLElement
}

const ctx = createContext<ICtxType>({})

export default ctx

export function useRootElement() {
  const ctxVal = useContext(ctx)
  return ctxVal?.rootElement ?? document.body
}
