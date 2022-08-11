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
  /** 抽屉大小 */
  size?: 'mini' | 'small' | 'medium' | 'large'
  /** extra 区域 **/
  extra?: React.ReactNode;
}

type CustomQuickShowConfig = QuickShowConfig & {
  /** 抽屉大小 */
  size?: 'mini' | 'small' | 'medium' | 'large'
  /** extra 区域 **/
  extra?: React.ReactNode;
}

const sizeMap = {
  mini: 400,
  small: 600,
  medium: 800,
  large: 1200
}

const yunxiaoSizeMap = {
  mini: 440,
  small: 600,
  medium: 800,
  large: 1200
}

// 获取常规Dialog size 大小
const getCustomWidth = (size: CustomDialogProps['size'], theme: string) => {
  const sizeWidth = theme.startsWith('yunxiao')
    ? yunxiaoSizeMap[size]
    : sizeMap[size]
  if (sizeWidth) {
    return sizeWidth
  }
  // 云效主题返回非法值，以可使fusion的width默认值失效，兼容历史通过className设置的宽度的场景
  if (theme.startsWith('yunxiao')) {
    return 'null'
  }

  // 如果想内部撑开要设置width=auto，但会时历史通过className设置的宽度失效
  return 'auto'
}

// 判断是否是云效主题，云效主题的 Dialog 局顶
const isYunxiaoTheme = (theme: string) => {
  return theme === 'yunxiao' ||
    theme === 'yunxiao-dark'
}

// 获取快捷调用 size 大小
const getQuickCustomWidth = (
  size: CustomDialogProps['size'],
  theme: string
) => {
  const sizeWidth = theme.startsWith('yunxiao')
    ? yunxiaoSizeMap[size]
    : sizeMap[size]
  if (sizeWidth) {
    return sizeWidth
  }
  // 云效主题返回非法值，以可使fusion的width默认值失效，兼容历史通过className设置的宽度的场景
  if (theme.startsWith('yunxiao')) {
    return 'null'
  }

  // 如果想内部撑开要设置width=auto，但会时历史通过className设置的宽度失效
  return 'auto'
}

// 设置阴影
const setFooterShadow = (dom, prefix) => {
  if (dom) {
    const dialogBodyDom = dom?.getElementsByClassName(
      `${prefix}dialog-body`
    )?.[0]
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
}

// 渲染表头
const renderTitle = (prefix: string, theme: string, title: React.ReactNode, extra: React.ReactNode) => {
  if (!(theme.startsWith('hybridcloud') || theme.startsWith('hybridcloud-dark'))) {
    return title
  }
  if (extra) {
    return (
      <div className={`${prefix}dialog-header-container`}>
        <span className={`${prefix}dialog-header-title`}>{title}</span>
        <span className={`${prefix}dialog-header-extra`}>{extra}
          <div className={`${prefix}dialog-header-line`}></div>
          </span>
      </div>
    )
  }
  return title
}

const Dialog: React.FC<CustomDialogProps> & {
  show: (config: CustomQuickShowConfig) => QuickShowRet
  confirm: (config: CustomQuickShowConfig) => QuickShowRet
  alert: (config: CustomQuickShowConfig) => QuickShowRet
  error: (config: CustomQuickShowConfig) => QuickShowRet
  success: (config: CustomQuickShowConfig) => QuickShowRet
} = (props) => {
  const { size, extra, title, ...others } = props
  const { prefix = 'next-' } = props
  const theme = useCssVar('--alicloudfe-components-theme').trim()

  const customRef = useRef(null)

  // 有滚动条时底部显示阴影
  const setFooterShadowOfRef = () => {
    if (theme !== 'wind' && !theme.startsWith('xconsole')) {
      setTimeout(() => {
        const dialogDom = ReactDOM.findDOMNode(customRef.current)
        setFooterShadow(dialogDom, prefix)
      })
    }
  }

  let observer = null
  // 绑定监听器
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFooterShadowOfRef()
      const drawerDom = ReactDOM.findDOMNode(customRef.current)
      const drawerBodyDom = drawerDom?.getElementsByClassName(
        `${prefix}dialog-body`
      )?.[0]
      if (drawerBodyDom && !observer) {
        observer = new MutationObserver(() => {
          setFooterShadowOfRef()
        })
        observer.observe(drawerBodyDom, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true,
          childList: true,
          subtree: true
        })
      }
    })
    // 销毁
    return () => {
      if (observer) {
        observer.disconnect()
        observer.takeRecords()
        observer = null
      }
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [others.visible])

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

  // 云效主题align在上方
  const defaultAlign = (() => {
    if (theme === 'yunxiao' || theme === 'yunxiao-dark') return 'tc tc'
    return 'cc cc'
  })()

  const defaultMinMargin = (() => {
    if (theme === 'yunxiao' || theme === 'yunxiao-dark') return 100
    return 40
  })()

  return (
    <NextDialog
      title={renderTitle(prefix, theme , title, extra)}
      width={getCustomWidth(size, theme)}
      footerActions={defaultFooterActions}
      v2
      centered={isYunxiaoTheme(theme) ? false : true}
      bottom={isYunxiaoTheme(theme) ? 40 : 80}
      {...others}
      ref={customRef}
    />
  )
}

const showDefaultFooterActions = (theme: string) => {
  if (
    theme === 'yunxiao' ||
    theme === 'yunxiao-dark' ||
    theme === 'hybridcloud' ||
    theme === 'hybridcloud-dark'
  )
    return ['cancel', 'ok']
  return ['ok', 'cancel']
}

const showDefaultAlign = (theme: string) => {
  if (theme === 'yunxiao' || theme === 'yunxiao-dark') return 'tc tc'
  return 'cc cc'
}

const showDefaultMinMargin = (theme: string) => {
  if (theme === 'yunxiao' || theme === 'yunxiao-dark') return 100
  return 40
}

// 快捷调用的操作按钮顺序
const show: (config: CustomQuickShowConfig) => QuickShowRet = (config) => {
  const { size, type, title, extra, ...others } = config
  const { prefix = 'next-' } = config

  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()

  const confirmClassName =
    (theme === 'hybridcloud' || theme === 'hybridcloud-dark') && type
      ? 'quick-show-confirm-or-alert'
      : ''

  setTimeout(() => {
    const doms = (document.getElementsByClassName('quick-show') ?? []) as any
    for (let item of doms) {
      // 初始化判断是否有阴影
      setFooterShadow(item, prefix)
      // 绑定body监听器。监听高度变化
      const dialogBodyDom = item?.getElementsByClassName(
        `${prefix}dialog-body`
      )?.[0]

      let observer = new MutationObserver(() => {
        setFooterShadow(item, prefix)
      })
      if (dialogBodyDom) {
        observer.observe(dialogBodyDom, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true,
          childList: true,
          subtree: true
        })
      }

      // 绑定dialog监听器，用于监听dialog被销毁时销毁所有监听器
      let domObserver = new MutationObserver(() => {
        if (item?.parentNode?.parentNode?.tagName !== 'BODY') {
          observer.disconnect()
          observer.takeRecords()
          observer = null
          domObserver.disconnect()
          domObserver.takeRecords()
          domObserver = null
        }
      })

      domObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true,
        childList: true,
        subtree: true
      })
    }
  })

  return NextDialog.show({
    width: getCustomWidth(size, theme),
    footerActions: showDefaultFooterActions(theme),
    // align: showDefaultAlign(theme),
    // minMargin: showDefaultMinMargin(theme),
    v2: true,
    centered: isYunxiaoTheme(theme) ? false : true,
    bottom: isYunxiaoTheme(theme) ? 40 : 80,
    // shouldUpdatePosition: true,
    type,
    title: renderTitle(prefix, theme , title, extra),
    ...others,
    // 将Dialog.show与其他quick弹窗区分出来，单独做样式覆盖，
    // 因为它的body是不包含Message的
    // 也有可能使用show方法调用confirm和alert。。。。
    className: ['quick-show', config.className, confirmClassName]
      .filter(Boolean)
      .join(' ')
  })
}

const confirm: (config: CustomQuickShowConfig) => QuickShowRet = (config) => {
  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()
  const { size, style, title, extra, ...others } = config
  const { prefix = 'next-' } = config
  return NextDialog.confirm({
    width: getQuickCustomWidth(size, theme),
    footerActions: showDefaultFooterActions(theme),
    // align: showDefaultAlign(theme),
    // minMargin: showDefaultMinMargin(theme),
    messageProps: { type: 'notice' },
    centered: isYunxiaoTheme(theme) ? false : true,
    bottom: isYunxiaoTheme(theme) ? 40 : 80,
    v2: true,
    title: renderTitle(prefix, theme , title, extra),
    // shouldUpdatePosition: true,
    ...others
  })
}

const alert: (config: CustomQuickShowConfig) => QuickShowRet = (config) => {
  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()
  const { size, title, extra, ...others } = config
  const { prefix = 'next-' } = config
  return NextDialog.alert({
    width: getQuickCustomWidth(size, theme),
    footerActions: showDefaultFooterActions(theme),
    // align: showDefaultAlign(theme),
    // minMargin: showDefaultMinMargin(theme),
    messageProps: { type: 'warning' },
    // shouldUpdatePosition: true,
    centered: isYunxiaoTheme(theme) ? false : true,
    bottom: isYunxiaoTheme(theme) ? 40 : 80,
    v2: true,
    title: renderTitle(prefix, theme , title, extra),
    ...others
  })
}

const error: (config: CustomQuickShowConfig) => QuickShowRet = (config) => {
  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()
  const { size, title, extra, ...others } = config
  const { prefix = 'next-' } = config
  return NextDialog.alert({
    width: getQuickCustomWidth(size, theme),
    footerActions: showDefaultFooterActions(theme),
    messageProps: { type: 'error' },
    centered: isYunxiaoTheme(theme) ? false : true,
    bottom: isYunxiaoTheme(theme) ? 40 : 80,
    v2: true,
    title: renderTitle(prefix, theme , title, extra),
    ...others,
    okProps: {
      warning: true,
      ...others.okProps
    }
  })
}

const success: (config: CustomQuickShowConfig) => QuickShowRet = (config) => {
  const theme = window
    .getComputedStyle?.(window.document.body)
    .getPropertyValue('--alicloudfe-components-theme')
    .trim()
  const { size, title, extra, ...others } = config
  const { prefix = 'next-' } = config
  return NextDialog.alert({
    width: getQuickCustomWidth(size, theme),
    footerActions: showDefaultFooterActions(theme),
    messageProps: { type: 'success' },
    centered: isYunxiaoTheme(theme) ? false : true,
    bottom: isYunxiaoTheme(theme) ? 40 : 80,
    v2: true,
    title: renderTitle(prefix, theme , title, extra),
    ...others
  })
}

hoistNonReactStatics(Dialog, NextDialog, { show: true, confirm: true })
Dialog.show = show
Dialog.confirm = confirm
Dialog.alert = alert
Dialog.error = error
Dialog.success = success

export type { DialogProps } from '@alifd/next/lib/dialog'
export default Dialog
