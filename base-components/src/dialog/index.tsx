import { Dialog as NextDialog } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react'
import { useCssVar } from '../utils/useCssVar'

type IProps = React.ComponentProps<typeof NextDialog>

const Dialog: React.FC<IProps> & {
  show: typeof NextDialog.show
  confirm: typeof NextDialog.confirm
} = ({ ...props }) => {
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

const showDefaultFooterActions = () => {
  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()
  if (
    theme === 'yunxiao' ||
    theme === 'yunxiao-dark' ||
    theme === 'hybridcloud' ||
    theme === 'hybridcloud-dark'
  )
    return ['cancel', 'ok']
  return ['ok', 'cancel']
}

// 快捷调用的操作按钮顺序
const show: typeof NextDialog.show = (config) => {
  return NextDialog.show({
    footerActions: showDefaultFooterActions(),
    ...config,
    // 将Dialog.show与其他quick弹窗区分出来，单独做样式覆盖，
    // 因为它的body是不包含Message的
    className: ['quick-show', config.className].filter(Boolean).join(' ')
  })
}

const confirm: typeof NextDialog.confirm = (config) => {
  return NextDialog.confirm({
    footerActions: showDefaultFooterActions(),
    ...config
  })
}

hoistNonReactStatics(Dialog, NextDialog, { show: true, confirm: true })
Dialog.show = show
Dialog.confirm = confirm

const exported: typeof NextDialog = Dialog as any

export default exported
