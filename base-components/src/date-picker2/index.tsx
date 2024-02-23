import React, { useMemo } from 'react'
import { DatePicker2 as NextDatePicker2 } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import moment from 'moment'

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = NextDatePicker2

function withDefaultFormat<T>(WrappedComponent: T): T {

  const Wrapper = React.forwardRef((props: any, ref) => {
    const { value, defaultValue, showTime } = props

    let format = props?.format;
    if (moment.locale().split('-')[0] === 'zh') {
      format = props.format ?? undefined
    } if (moment.locale().split('-')[0] === 'en') {
      format = ('MMM DD, YYYY')
      if (showTime) {
        format = ('MMM DD, YYYY HH:mm:ss')
      }
    }
    // @ts-ignore
    return <WrappedComponent {...props}  format={format} ref={ref} />
  })
  hoistNonReactStatics(Wrapper, WrappedComponent as any)
  return (Wrapper as any) as T
}

const DatePicker2 = withDefaultFormat(NextDatePicker2)
;(DatePicker2 as any).RangePicker = withDefaultFormat(RangePicker)

export default DatePicker2
