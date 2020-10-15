import {R as React, h as hoistNonReactStatics_cjs} from "./index.c7468b78.js";
import {N as NextSelect} from "./8df6240b.js";
import {H as HOC} from "./ab9d0c3d.js";
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
