import { Form as NextForm } from '@alifd/next'
import { ItemProps } from '@alifd/next/types/form'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
// import Typography from '@teamix/typography'
import CNCHARHOC from '../utils/cnCharHoc'
import { useCssVar } from '../utils/useCssVar'

// const { Text } = Typography

type NextFormProps = React.ComponentProps<typeof NextForm>

const Form: typeof NextForm = React.forwardRef((props: NextFormProps, ref) => {
  const theme = useCssVar('--alicloudfe-components-theme').trim()
  if (
    theme === 'wind' ||
    theme.startsWith('xconsole') ||
    theme.startsWith('hybridcloud')
  ) {
    return <NextForm labelTextAlign="left" {...props} ref={ref as any} />
  }
  return <NextForm {...props} ref={ref as any} />
}) as any

// const Item: ItemProps = React.forwardRef((props: ItemProps, ref) => {
//   const theme = useCssVar('--alicloudfe-components-theme').trim()
//   if (theme.startsWith('hybridcloud') || theme.startsWith('yunxiao')) {
//     const { label } = props
//     return (
//       <Item
//         label={
//           <Text
//             style={{ width: '100%' }}
//             ellipsis={{
//               tooltip: label
//             }}
//           >
//             {label}
//           </Text>
//         }
//         {...props}
//         ref={ref as any}
//       />
//     )
//   }
// }) as any

hoistNonReactStatics(Form, NextForm)

Form.Submit = CNCHARHOC(Form.Submit) as any
Form.Reset = CNCHARHOC(Form.Reset) as any
// Form.Item = Item as any

export default Form
