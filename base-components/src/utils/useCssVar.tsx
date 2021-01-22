import { useLayoutEffect, RefObject, useState } from 'react'
import { useRootElement } from '../config-provider/ctx'

let nextId = 0

export function useCssVar(cssVarName: string) {
  const [v, setV] = useState('')
  const rootElement = useRootElement()

  useLayoutEffect(() => {
    check()

    const checkArr = (window['__recheck_css_var'] =
      window['__recheck_css_var'] ?? [])
    while (checkArr[nextId]) {
      // 如果一个页面下有份此组件库（即有多个nextId指针），需要避免冲突
      nextId++
    }
    const id = nextId++
    checkArr[id] = check

    return () => {
      delete checkArr[id]
    }

    function check() {
      const val =
        window.getComputedStyle?.(rootElement).getPropertyValue(cssVarName) ??
        ''
      setV(val)
    }
  }, [rootElement, cssVarName])

  return v
}
