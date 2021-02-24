import { createContext, useContext, useLayoutEffect, useState } from 'react'

export interface ICtxType {
  rootElementGetter?: HTMLElement | (() => HTMLElement)
}

const ctx = createContext<ICtxType>({})

export default ctx
