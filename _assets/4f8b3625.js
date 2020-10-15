import {R as React, h as hoistNonReactStatics_cjs} from "./index.9ac755a3.js";
import {N as NextSelect} from "./3ff1498d.js";
import {H as HOC} from "./dc68de8f.js";
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
