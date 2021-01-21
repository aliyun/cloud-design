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
    return (
      <NextSelect
        autoWidth={false}
        {...props}
        menuProps={menuProps}
        ref={ref as any}
      />
    )
  }
) as any

Select = HOC(Select) as any

hoistNonReactStatics(Select, NextSelect)

Select.AutoComplete = HOC(NextSelect.AutoComplete) as any

export default Select
