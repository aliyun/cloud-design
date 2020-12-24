import {R as React, d as classnames, h as hoistNonReactStatics_cjs} from "./index.e8c3f862.js";
import {N as NextButton} from "./0ad7b7e0.js";
const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/;
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar);
const Button = React.forwardRef((props, ref) => {
  const {children, className} = props;
  if (typeof children === "string" && isTwoToFourCNChar(children)) {
    return /* @__PURE__ */ React.createElement(NextButton, {
      className: classnames("isTwoToFourCNCharBtn", className),
      ...props,
      ref
    }, children);
  }
  if (React.Children.count(children) === 1 && children?.type?.displayName === "Config(Icon)") {
    return /* @__PURE__ */ React.createElement(NextButton, {
      className: classnames("isOnlyIcon", className),
      ...props,
      ref
    }, children);
  }
  return /* @__PURE__ */ React.createElement(NextButton, {
    className,
    ...props,
    ref
  }, children);
});
hoistNonReactStatics_cjs(Button, NextButton);
export {Button as B};
