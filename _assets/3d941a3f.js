import {R as React, h as hoistNonReactStatics_cjs} from "./index.e76f7845.js";
import {N as NextSelect} from "./ce7ac670.js";
import {H as HOC} from "./7796e7f8.js";
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
