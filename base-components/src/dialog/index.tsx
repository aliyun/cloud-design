import { Dialog as NextDialog } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'
import { useCssVar } from '../utils/useCssVar'

type IProps = React.ComponentProps<typeof NextDialog>

const Dialog: React.FC<IProps> = ({ ...props }) => {
  const theme = useCssVar('--alicloudfe-components-theme').trim()

  // 云效混合云主题样式主操作在右边
  const defaultFooterActions = (() => {
    if (
      theme === 'yunxiao' ||
      theme === 'yunxiao-dark' ||
      theme === 'hybridcloud' ||
      theme === 'hybridcloud-dark'
    )
      return ['cancel', 'ok']
    return ['ok', 'cancel']
  })()

  return <NextDialog footerActions={defaultFooterActions} {...props} />
}

hoistNonReactStatics(Dialog, NextDialog)

const exported: typeof NextDialog = Dialog as any

export default exported
