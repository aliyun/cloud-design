import {R as React, d as classnames, h as hoistNonReactStatics_cjs} from "./index.201274f6.js";
import {u as useCssVar} from "./70822258.js";
function withThemeClass(Comp) {
  const Wrapped = (props) => {
    const theme = useCssVar("--alicloudfe-components-theme");
    const isWind = theme.trim() === "wind";
    return /* @__PURE__ */ React.createElement(Comp, {
      ...props,
      className: classnames(props.className, {
        ["is-wind"]: isWind
      })
    });
  };
  hoistNonReactStatics_cjs(Wrapped, Comp);
  return Wrapped;
}
export {withThemeClass as w};
