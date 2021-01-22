import { Search as NextSearch } from '@alifd/next'
import React, { useCallback, useState } from 'react'
import classnames from 'classnames'
import HOC from '../utils/popupHoc'
import { withThemeClass } from '../utils/withThemeClass'

type SearchProps = React.ComponentProps<typeof NextSearch>

const Search: React.FC<SearchProps> = withThemeClass((props) => {
  const [focus, setFocus] = useState(false)
  const [visible, setVisible] = useState(false)
  const onFocus = useCallback(
    (e) => {
      setFocus(true)
      if (typeof props.onFocus === 'function') {
        props.onFocus(e)
      }
    },
    [props.onFocus]
  )
  const onBlur = useCallback(
    (e) => {
      setFocus(false)
      if (typeof props.onBlur === 'function') {
        props.onBlur(e)
      }
    },
    [props.onBlur]
  )
  const onVisibleChange = useCallback(
    (v, ...rest) => {
      setVisible(v)
      if (typeof props.onVisibleChange === 'function') {
        // @ts-ignore
        props.onVisibleChange(v, ...rest)
      }
    },
    [props.onVisibleChange]
  )

  return (
    <NextSearch
      {...props}
      onFocus={onFocus}
      onBlur={onBlur}
      onVisibleChange={onVisibleChange}
      className={classnames(
        props.className,
        // 根据当前状态增加类名，用来做样式覆盖
        props.searchText ? 'custom-search-text' : null,
        focus ? 'focusing' : false,
        visible ? 'visible' : false,
        props.disabled? 'disabled': false
      )}
    />
  )
})

export default HOC(Search)
