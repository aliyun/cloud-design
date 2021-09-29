import { Dialog as NextDialog } from '@alifd/next'
import ReactDOM from 'react-dom'
import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { useEffect, useRef } from 'react'
import { useCssVar } from '../utils/useCssVar'
import {
  DialogProps,
  QuickShowConfig,
  QuickShowRet
} from '@alifd/next/types/dialog'

type CustomDialogProps = DialogProps & {
  /**
   * 抽屉大小
   */
  size?: 'mini' | 'small' | 'medium' | 'large'
}

type CustomQuickShowConfig = QuickShowConfig & {
  /**
   * 抽屉大小
   */
  size?: 'mini' | 'small' | 'medium' | 'large'
}

const sizeMap = {
  mini: 400,
  small: 600,
  medium: 800,
  large: 1200
}

// 获取 size 大小
const getCustomWidth = (size: CustomDialogProps['size']) => {
  const sizeWidth = sizeMap[size]
  if (sizeWidth) {
    return {
      style: {
        width: `${sizeWidth}px`
      }
    }
  }
  return {}
}

// 设置阴影
const setFooterShadow = (dom, prefix) => {
  const dialogBodyDom = dom?.getElementsByClassName(`${prefix}dialog-body`)?.[0]
  const dialogFooterDom = dom?.getElementsByClassName(
    `${prefix}dialog-footer`
  )?.[0]
  if (dialogFooterDom) {
    if (dialogBodyDom?.clientHeight < dialogBodyDom?.scrollHeight) {
      dialogFooterDom.classList.add(`${prefix}dialog-footer-has-shadow`)
    } else {
      dialogFooterDom.classList.remove(`${prefix}dialog-footer-has-shadow`)
    }
  }
}

const Dialog: React.FC<CustomDialogProps> & {
  show: (config: CustomQuickShowConfig) => QuickShowRet
  confirm: (config: CustomQuickShowConfig) => QuickShowRet
  alert: (config: CustomQuickShowConfig) => QuickShowRet
} = props => {
  const { size, ...others } = props
  const { prefix = 'next-' } = props
  const theme = useCssVar('--alicloudfe-components-theme').trim()

  const customRef = useRef(null)

  // 有滚动条时底部显示阴影
  const setFooterShadowOfRef = () => {
    if (theme !== 'wind' && !theme.startsWith('xconsole')) {
      const dialogDom = ReactDOM.findDOMNode(customRef.current)
      setFooterShadow(dialogDom, prefix)
    }
  }

  useEffect(() => {
    if (customRef) {
      setFooterShadowOfRef()
    }
  })

  useEffect(() => {
    setFooterShadowOfRef()
  }, [
    ReactDOM.findDOMNode(customRef.current)?.getElementsByClassName(
      'next-dialog'
    )?.[0]?.clientHeight
  ])

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

  return (
    <NextDialog
      {...getCustomWidth(size)}
      footerActions={defaultFooterActions}
      {...others}
      ref={customRef}
    />
  )
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
const show: (config: CustomQuickShowConfig) => QuickShowRet = config => {
  const { size, ...others } = config
  const { prefix = 'next-' } = config

  setTimeout(() => {
    const doms = document.getElementsByClassName('quick-show')
    for (let item of doms as any) {
      setFooterShadow(item, prefix)
    }
  })

  return NextDialog.show({
    ...getCustomWidth(size),
    footerActions: showDefaultFooterActions(),
    ...others,
    // 将Dialog.show与其他quick弹窗区分出来，单独做样式覆盖，
    // 因为它的body是不包含Message的
    className: ['quick-show', config.className].filter(Boolean).join(' ')
  })
}

const confirm: (config: CustomQuickShowConfig) => QuickShowRet = config => {
  const { size, ...others } = config
  return NextDialog.confirm({
    ...getCustomWidth(size),
    footerActions: showDefaultFooterActions(),
    messageProps: { type: 'notice' },
    ...others
  })
}

const alert: (config: CustomQuickShowConfig) => QuickShowRet = config => {
  const { size, ...others } = config
  return NextDialog.alert({
    ...getCustomWidth(size),
    footerActions: showDefaultFooterActions(),
    messageProps: { type: 'warning' },
    ...others
  })
}

hoistNonReactStatics(Dialog, NextDialog, { show: true, confirm: true })
Dialog.show = show
Dialog.confirm = confirm
Dialog.alert = alert

export type { DialogProps } from '@alifd/next/lib/dialog';
export default Dialog
