import React from 'react'
import { Overlay as NextOverlay } from '@alifd/next'
import {
  OverlayProps as NextOverlayProps,
  PopupProps as NextPopupProps
} from '@alifd/next/types/overlay'

const { Popup: NextPopup } = NextOverlay

const Overlay: typeof NextOverlay = React.forwardRef(
  (props: NextOverlayProps, ref) => {
    return <NextOverlay v2 {...props} ref={ref as any} />
  }
) as any

const Popup: typeof NextPopup = React.forwardRef(
  (props: NextPopupProps, ref) => {
    return <NextPopup v2 {...props} ref={ref as any} />
  }
) as any

Overlay.Popup = Popup

export default Overlay
