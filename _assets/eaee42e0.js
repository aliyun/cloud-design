import {R as React, h as hoistNonReactStatics_cjs} from "./index.2dd166ed.js";
import {N as NextSelect} from "./1eb3882c.js";
import {H as HOC} from "./68ce33c3.js";
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
