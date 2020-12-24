import {R as React} from "./index.e8c3f862.js";
import {N as NextBalloon} from "./02a8a9bd.js";
const {Tooltip: NextTooltip} = NextBalloon;
const Tooltip = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(NextTooltip, {
    delay: 200,
    ...props,
    ref
  });
});
NextBalloon.Tooltip = Tooltip;
