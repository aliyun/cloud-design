import { Dialog as NextDialog } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'
import { useCssVar } from '../utils/useCssVar'

type IProps = React.ComponentProps<typeof NextDialog>

const Dialog: React.FC<IProps> = ({ ...props }) => {
  const theme = useCssVar('--alicloudfe-components-theme').trim()
  const defaultFooterAlign = (() => {
    if (theme === 'wind' || theme === 'xconsole') return 'right'
    return 'left'
  })()

  return <NextDialog footerAlign={defaultFooterAlign} {...props} />
}

hoistNonReactStatics(Dialog, NextDialog)

const exported: typeof NextDialog = Dialog as any

export default exported
