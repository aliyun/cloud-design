import { Dialog as NextDialog } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'

type IProps = React.ComponentProps<typeof NextDialog>

const Dialog: React.FC<IProps> = ({ ...props }) => {
  return (
    <NextDialog
      footerAlign='left'
      {...props}
    />
  )
}

hoistNonReactStatics(Dialog, NextDialog)

const exported: typeof NextDialog = Dialog as any

export default exported
