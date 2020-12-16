import {R as React, e as classnames, h as hoistNonReactStatics_cjs} from "./index.fc1c4ecb.js";
import {u as useCssVar} from "./4a749851.js";
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
