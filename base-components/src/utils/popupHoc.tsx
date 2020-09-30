// 弹层类组件高阶组件，默认向下 4px 弹出
import React, { useEffect, useState } from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

const HOC = <T extends any>(
  WrappedComponents: React.ComponentType<T>
): React.ComponentType<T> => {
  const Wrapper = React.forwardRef((props, ref) => {
    const [defaultOffsetY, onPosition] = useDefaultOffsetY()
    const popupProps = {
      align: 'tl bl',
      offset: [0, defaultOffsetY],
      onPosition,
      ...(props as any).popupProps
    }
    return (
      <WrappedComponents ref={ref as any} {...props} popupProps={popupProps} />
    )
  }) as React.ComponentType<T>
  hoistNonReactStatics(Wrapper, WrappedComponents)
  return Wrapper
}

export default HOC

const OverlayHOC = <T extends any>(
  WrappedComponents: React.ComponentType<T>
): React.ComponentType<T> => {
  const Wrapper = React.forwardRef((props, ref) => {
    const [defaultOffsetY, onPosition] = useDefaultOffsetY()
    return (
      <WrappedComponents
        ref={ref as any}
        align="tl bl"
        offset={[0, defaultOffsetY]}
        onPosition={onPosition}
        {...props}
      />
    )
  }) as React.ComponentType<T>
  hoistNonReactStatics(Wrapper, WrappedComponents)
  return Wrapper
}

export { OverlayHOC }

function useDefaultOffsetY() {
  const [defaultOffsetY, set] = useState(4)
  function onPosition(config, node) {
    const str =
      getComputedStyle(node).getPropertyValue('--overlay-offset') || '4'
    const newOffset = parseInt(str.trim())
    if (Number.isFinite(newOffset) && newOffset !== defaultOffsetY) {
      set(newOffset)
    }
  }
  return [defaultOffsetY, onPosition]
}
