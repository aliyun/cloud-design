import { createContext, useContext, useLayoutEffect, useState } from 'react'

export interface ICtxType {
  refElement: HTMLElement
}

const ctx = createContext<ICtxType>({ refElement: document.body })

export default ctx
