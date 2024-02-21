import React, { useMemo } from 'react'
import { DatePicker2 as NextDatePicker2 } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import moment from 'moment'

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = NextDatePicker2

function withDefaultFormat<T>(WrappedComponent: T): T {

  const Wrapper = React.forwardRef((props: any, ref) => {
    let defaultFormat = useMemo(() => {
      // 从全局moment对象获取当前的moment文案
      if (props?.showTime) {
        return moment().format('MMM DD, YYYY HH:mm:ss')
      }
      return moment().format('MMM DD, YYYY')
    }, [])

    // 从props的moment对象获取当前的moment文案
    const { value, defaultValue, showTime } = props
    const exactValue = value || defaultValue
    if (moment.isMoment(exactValue)) {
      defaultFormat = moment().format('MMM DD, YYYY')

      if (showTime) {
        defaultFormat = moment().format('MMM DD, YYYY HH:mm:ss')
      }
    }
    let format = props.format ?? defaultFormat
    if (moment.locale().split('-')[0] === 'zh') {
      format = props.format ?? undefined
    }

    // @ts-ignore
    return <WrappedComponent {...props} format={format} ref={ref} />
  })
  hoistNonReactStatics(Wrapper, WrappedComponent as any)
  return (Wrapper as any) as T
}

const DatePicker2 = withDefaultFormat(NextDatePicker2)
;(DatePicker2 as any).RangePicker = withDefaultFormat(RangePicker)

export default DatePicker2
