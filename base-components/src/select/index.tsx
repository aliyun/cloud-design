import { Select as NextSelect } from '@alifd/next'
import React, { useMemo, useState } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

import HOC from '../utils/popupHoc'
import { useCssVar } from '../utils/useCssVar'
type NextSelectProps = React.ComponentProps<typeof NextSelect>

let Select: typeof NextSelect = React.forwardRef(
  (props: NextSelectProps, ref) => {
    const theme = useCssVar('--alicloudfe-components-theme')
    const isWind = theme.trim() === 'wind'
    // 用于临时保存当前搜索内容
    const [searchCache, setSearchCache] = useState('')
    const menuProps = (() => {
      if (!isWind) return props.menuProps
      return {
        isSelectIconRight: true,
        ...props.menuProps
      }
    })()
    const { dataSource, children, hideEmptyOptionGroup } = props
    const { cachedDataSource, cachedChildren } = useMemo(() => {
      // 不传hideEmptyOptionGroup，直接跳过，避免不必要的计算
      if (!hideEmptyOptionGroup) return {}
      // group形式最多只有两层
      const tempDataSource = dataSource?.filter?.(item => {
        return (
          // 对于dataSource型，如果有children，且children中有包含搜索内容，则保留，否则过滤
          item?.children && item?.children.length && item?.children?.some(item => item?.label?.indexOf?.(searchCache) > -1)
          || !item?.children
        )

      })
      const tempChildren = children?.filter?.(item => {
        return (
          // 对于reactnode型，如果子节点有包含搜索内容，则保留，否则过滤
          item?.props.children
          // 且子节点中有包含搜索内容，可能是label也可能在children
          && (item?.props?.children.some(item => item?.props?.children?.indexOf?.(searchCache) > -1 || item?.props?.label?.indexOf?.(searchCache) > -1))
        )
      })
      return {
        cachedDataSource: dataSource ? tempDataSource : undefined,
        cachedChildren: children ? tempChildren : undefined
      }
    }, [dataSource, children, searchCache])
    const defaultAutoHighlightFirstItem = (theme: string) => {
      if (
        theme === 'yunxiao' ||
        theme === 'yunxiao-dark' ||
        theme === 'hybridcloud' ||
        theme === 'hybridcloud-dark'
      ) {
        return false
      }
      return true
    }
    const onSearch = (v) => {
      setSearchCache(v)
      props?.onSearch?.(v)
    }
    // xconsole以及其他大部分主题，select下拉menu的padding较大，
    // 不能autoWidth，否则内容区域太短
    const defaultAutoWidth = isWind ? true : false
    return (
      <NextSelect
        autoHighlightFirstItem={defaultAutoHighlightFirstItem(theme.trim())}
        {...props}
        autoWidth={props.autoWidth ?? defaultAutoWidth}
        menuProps={menuProps}
        dataSource={hideEmptyOptionGroup ? cachedDataSource : dataSource}
        children={hideEmptyOptionGroup ? cachedChildren : children}
        onSearch={hideEmptyOptionGroup ? onSearch : props?.onSearch}
        ref={ref as any}
      />
    )
  }
) as any

Select = HOC(Select, false) as any

hoistNonReactStatics(Select, NextSelect)

Select.AutoComplete = HOC(NextSelect.AutoComplete, false) as any

export default Select
