
  import { Form as NextForm } from '@alifd/next'
  import CNCHARHOC from '../utils/cnCharHoc';
  // import React from 'react'
  // import hoistNonReactStatics from 'hoist-non-react-statics'

  // type NextFormProps = React.ComponentProps<typeof NextForm>

  // const Form: typeof NextForm = React.forwardRef(
  //   (props: NextFormProps, ref) => {
  //     return <NextForm labelTextAlign="left" {...props} ref={ref as any} />
  //   }
  // )as any

  // hoistNonReactStatics(Form, NextForm)

  NextForm.Submit = CNCHARHOC(NextForm.Submit) as any
  NextForm.Reset = CNCHARHOC(NextForm.Reset) as any
  
  export default NextForm;
    
  