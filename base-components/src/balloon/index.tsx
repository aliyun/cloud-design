import React from 'react'
import { Balloon as NextBalloon } from '@alifd/next'
import { TooltipProps as NextTooltipProps } from '@alifd/next/types/balloon'

const { Tooltip: NextTooltip } = NextBalloon;

const Tooltip: typeof NextTooltip = React.forwardRef(
  (props: NextTooltipProps, ref) => {
    return <NextTooltip delay={200} {...props} ref={ref as any} />
  }
)as any

NextBalloon.Tooltip = Tooltip;

export default NextBalloon;
    
  