import {R as React, h as hoistNonReactStatics_cjs} from "./index.77174d20.js";
import {N as NextSelect} from "./05a49538.js";
import {H as HOC} from "./1854cde0.js";
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
