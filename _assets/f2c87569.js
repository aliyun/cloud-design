import {R as React} from "./index.e4cec8f0.js";
import {N as NextBalloon} from "./c4c06d64.js";
const {Tooltip: NextTooltip} = NextBalloon;
const Tooltip = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(NextTooltip, {
    delay: 200,
    ...props,
    ref
  });
});
NextBalloon.Tooltip = Tooltip;
