import {R as React, h as hoistNonReactStatics_cjs} from "./index.bb8dccba.js";
import {N as NextSelect} from "./871d780a.js";
import {H as HOC} from "./775619bb.js";
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
