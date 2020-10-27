import {R as React} from "./index.7e05a4b9.js";
import {N as NextBalloon} from "./c5dffc3e.js";
const {Tooltip: NextTooltip} = NextBalloon;
const Tooltip = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(NextTooltip, {
    delay: 200,
    ...props,
    ref
  });
});
NextBalloon.Tooltip = Tooltip;
