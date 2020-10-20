import {R as React, h as hoistNonReactStatics_cjs} from "./index.8f10cf2d.js";
import {N as NextSelect} from "./83a9e954.js";
import {H as HOC} from "./c5efd5d0.js";
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
