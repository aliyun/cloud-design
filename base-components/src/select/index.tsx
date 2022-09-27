import { Select as NextSelect } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

import HOC from '../utils/popupHoc'
import { useCssVar } from '../utils/useCssVar'

type NextSelectProps = React.ComponentProps<typeof NextSelect>

let Select: typeof NextSelect = React.forwardRef(
  (props: NextSelectProps, ref) => {
    const theme = useCssVar('--alicloudfe-components-theme')
    const isWind = theme.trim() === 'wind'
    const menuProps = (() => {
      if (!isWind) return props.menuProps
      return {
        isSelectIconRight: true,
        ...props.menuProps
      }
    })()
    // 处理在存在专有云吊顶情况下弹层不跟随滚动的问题
    const popupProps = (() => {
      if (theme.startsWith('hybridcloud')) {
        return {
          v2: true,
          ...props.popupProps
        }
      } else {
        return props.popupProps
      }
    })()
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
    // xconsole以及其他大部分主题，select下拉menu的padding较大，
    // 不能autoWidth，否则内容区域太短
    const defaultAutoWidth = isWind ? true : false
    return (
      <NextSelect
        autoHighlightFirstItem={defaultAutoHighlightFirstItem(theme.trim())}
        {...props}
        autoWidth={props.autoWidth ?? defaultAutoWidth}
        menuProps={menuProps}
        popupProps={popupProps}
        ref={ref as any}
      />
    )
  }
) as any

Select = HOC(Select) as any

hoistNonReactStatics(Select, NextSelect)

Select.AutoComplete = HOC(NextSelect.AutoComplete) as any

export default Select
