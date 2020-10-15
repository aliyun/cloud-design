import {R as React} from "./index.c7468b78.js";
import {N as NextBalloon} from "./5576421d.js";
const {Tooltip: NextTooltip} = NextBalloon;
const Tooltip = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(NextTooltip, {
    delay: 200,
    ...props,
    ref
  });
});
NextBalloon.Tooltip = Tooltip;
