import {R as React, h as hoistNonReactStatics_cjs} from "./index.eccaf1a0.js";
import {N as NextSelect} from "./049c6e60.js";
import {H as HOC} from "./5da3df54.js";
let Select = React.forwardRef((props, ref) => {
  return /* @__PURE__ */ React.createElement(NextSelect, {
    autoWidth: false,
    ...props,
    ref
  });
});
Select = HOC(Select);
hoistNonReactStatics_cjs(Select, NextSelect);
Select.AutoComplete = HOC(NextSelect.AutoComplete);
var Select$1 = Select;
export {Select$1 as S};
