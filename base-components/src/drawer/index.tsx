import React, { ReactNode, useEffect, useState } from 'react';
import { Drawer as NextDrawer } from '@alifd/next'
import { withThemeClass } from '../utils/withThemeClass';
import hoistNonReactStatics from 'hoist-non-react-statics'
import { default as Button } from '../button'
import cls from 'classnames'
import { ButtonProps } from '@alifd/next/types/button';

type NextDrawerProps = React.ComponentProps<typeof NextDrawer>

interface IDrawer {
  /**
   * 点击确认按钮时的回调。有此参数就默认显示确认按钮
   */
  onOk?: () => void;
  /**
   * 点击取消按钮时的回调。有此参数就默认显示取消按钮
   */
  onCancel?: () => void;
  /**
   * 完全自定义底部操作栏
   */
  renderFooter?: React.ReactNode;
  /**
   * 是否有底部分割线
   */
  footerLine?: boolean;
  /**
   * 底部按钮位置
   */
  footerAlign?: 'left' | 'center' | 'right';
  /**
   * 取消按钮的文字
   */
  cancelText?: React.ReactNode;
  /**
   * 确认按钮的文字
   */
  okText?: React.ReactNode;
  /**
   * 透传给取消按钮的Props
   */
  cancelBtnProps?: ButtonProps;
  /**
   * 透传给确认按钮的Props
   */
  okBtnProps?: ButtonProps;
  /**
   * 给footer增加className
   */
  footerClass?: string;
}

export type DrawerProps = NextDrawerProps & IDrawer

const Drawer: React.FC<DrawerProps> = withThemeClass(
  React.forwardRef((props: DrawerProps, ref) => {

    const { 
      onOk,
      onCancel,
      renderFooter,
      footerLine,
      footerAlign,
      children,
      okText = 'Ok',
      cancelText = 'Cancel',
      cancelBtnProps = {},
      okBtnProps = {},
      footerClass,
      ...filterProps
    } = props;
    const { visible } = filterProps;
    const [customVisible, setCustomVisible] = useState<boolean>(false);

    useEffect(() => {
      setCustomVisible(visible);
    }, [visible])
    
    const drawerFooterClassName = cls({
      'next-drawer-footer': true,
      'next-drawer-footer-line': footerLine,
      'next-drawer-footer-right': footerAlign === 'right',
      'next-drawer-footer-left': footerAlign === 'left',
      'next-drawer-footer-center': footerAlign === 'center',
      [footerClass]: true
    })

    return (
      <NextDrawer
        {...filterProps}
        ref={ref as any}
        visible={customVisible}
      >
        { children }
        {
          (onOk || onCancel || renderFooter) && (
            <div
              className={drawerFooterClassName}
            >
              { (onCancel && !renderFooter) && (
                <Button
                  style={{ marginRight: 8 }}
                  onClick={onCancel}
                  {...cancelBtnProps}
                >
                  {cancelText}
                </Button>
              )}
              { (onOk && !renderFooter) && (
                  <Button type="primary" onClick={onOk} {...okBtnProps}>{okText}</Button>
                )
              }
              { renderFooter && renderFooter}
            </div>
          )
        }
        
      </NextDrawer>
    )
  })
) as any

hoistNonReactStatics(Drawer, NextDrawer)

// @ts-ignore
Drawer.displayName = NextDrawer.displayName

export default Drawer;
    
  