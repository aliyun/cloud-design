import { createContext, useContext, useLayoutEffect, useState } from 'react'

export interface ICtxType {
  rootElementGetter?: HTMLElement | (() => HTMLElement)
  rootElement: HTMLElement
}

const ctx = createContext<ICtxType>({ rootElement: document.body })

export default ctx
