import { Select as NextSelect } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import HOC from '../utils/popupHoc'

type NextSelectProps = React.ComponentProps<typeof NextSelect>

let Select: typeof NextSelect = React.forwardRef(
  (props: NextSelectProps, ref) => {
    return <NextSelect autoWidth={false} {...props} ref={ref as any} />
  }
)as any

Select = HOC(Select) as any

hoistNonReactStatics(Select, NextSelect)

Select.AutoComplete = HOC(NextSelect.AutoComplete) as any

export default Select
