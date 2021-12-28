import { Transfer as NextTransfer } from '@alifd/next'
import React from 'react'
import { withThemeClass } from '../utils/withThemeClass'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useCssVar } from '../utils/useCssVar'
import { getMessage } from '../utils/locale'

type NextTransferProps = React.ComponentProps<typeof NextTransfer>

const Transfer: React.FC<NextTransferProps> = withThemeClass(
  React.forwardRef((props: NextTransferProps, ref) => {
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    const { prefix = 'next-' } = props

    // 获取空状态
    const renderNotFoundContent = () => {
      return (
        <span className={`${prefix}transfer-no-data`}>
          {getMessage('noData')}
        </span>
      )
    }

    if (theme === 'hybridcloud' || theme === 'hybridcloud-dark') {
      return (
        <NextTransfer
          ref={ref as any}
          notFoundContent={renderNotFoundContent()}
          {...props}
        />
      )
    }
    return <NextTransfer ref={ref as any} {...props} />
  })
)

hoistNonReactStatics(Transfer, NextTransfer)

// @ts-ignore
Transfer.displayName = NextTransfer.displayName

export default Transfer
