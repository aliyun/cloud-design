import { Dialog as NextDialog } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'
import classnames from 'classnames'

type IProps = React.ComponentProps<typeof NextDialog>

const Dialog: React.FC<IProps> = ({ footerAlign, ...props }) => {
  return (
    <NextDialog
      className={classnames({ 'footer-align-undefined': !footerAlign })}
      footerAlign={footerAlign}
      {...props}
    />
  )
}

hoistNonReactStatics(Dialog, NextDialog)

const exported: typeof NextDialog = Dialog as any

export default exported
