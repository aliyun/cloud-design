import {R as React, h as hoistNonReactStatics_cjs, q as useState} from "./index.eccaf1a0.js";
const HOC = (WrappedComponents) => {
  const Wrapper = React.forwardRef((props, ref) => {
    const [defaultOffsetY, onPosition] = useDefaultOffsetY();
    const popupProps = {
      align: "tl bl",
      offset: [0, defaultOffsetY],
      onPosition,
      ...props.popupProps
    };
    return /* @__PURE__ */ React.createElement(WrappedComponents, {
      ref,
      ...props,
      popupProps
    });
  });
  hoistNonReactStatics_cjs(Wrapper, WrappedComponents);
  return Wrapper;
};
const OverlayHOC = (WrappedComponents) => {
  const Wrapper = React.forwardRef((props, ref) => {
    const [defaultOffsetY, onPosition] = useDefaultOffsetY();
    return /* @__PURE__ */ React.createElement(WrappedComponents, {
      ref,
      align: "tl bl",
      offset: [0, defaultOffsetY],
      onPosition,
      ...props
    });
  });
  hoistNonReactStatics_cjs(Wrapper, WrappedComponents);
  return Wrapper;
};
function useDefaultOffsetY() {
  const [defaultOffsetY, set] = useState(4);
  function onPosition(config, node) {
    const str = getComputedStyle(node).getPropertyValue("--overlay-offset") || "4";
    const newOffset = parseInt(str.trim());
    if (Number.isFinite(newOffset) && newOffset !== defaultOffsetY) {
      set(newOffset);
    }
  }
  return [defaultOffsetY, onPosition];
}
export {HOC as H, OverlayHOC as O};
