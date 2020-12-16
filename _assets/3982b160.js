import {R as React} from "./index.fc1c4ecb.js";
import {N as NextBalloon} from "./7f58752b.js";
const {Tooltip: NextTooltip} = NextBalloon;
const Tooltip = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(NextTooltip, {
    delay: 200,
    ...props,
    ref
  });
});
NextBalloon.Tooltip = Tooltip;
