import { TreeSelect as NextTreeSelect } from '@alifd/next'
import React from 'react'
import { withThemeClass } from '../utils/withThemeClass'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { useCssVar } from '../utils/useCssVar'
import { getMessage } from '../utils/locale'

type NextTreeSelectProps = React.ComponentProps<typeof NextTreeSelect>

const TreeSelect: React.FC<NextTreeSelectProps> = withThemeClass(
  React.forwardRef((props: NextTreeSelectProps, ref) => {
    const theme = useCssVar('--alicloudfe-components-theme').trim()
    const { prefix = 'next-' } = props

    // 获取空状态
    const renderNotFoundContent = () => {
      return (
        <span className={`${prefix}tree-select-no-data`}>
          {getMessage('notFound')}
        </span>
      )
    }

    if (theme === 'hybridcloud' || theme === 'hybridcloud-dark') {
      return (
        <NextTreeSelect
          ref={ref as any}
          notFoundContent={renderNotFoundContent()}
          {...props}
          popupProps={{
            v2: true,
            ...props.popupProps
          }}
        />
      )
    }
    return <NextTreeSelect ref={ref as any} {...props} />
  })
)

hoistNonReactStatics(TreeSelect, NextTreeSelect)

// @ts-ignore
TreeSelect.displayName = NextTreeSelect.displayName

export default TreeSelect
