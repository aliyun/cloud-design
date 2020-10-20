import {h as hoistNonReactStatics_cjs, R as React, d as classnames} from "./index.8f10cf2d.js";
import {N as NextButton} from "./5197dbb9.js";
const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/;
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar);
const Button = ({
  children,
  className,
  ...restProps
}) => {
  if (typeof children === "string" && isTwoToFourCNChar(children)) {
    return /* @__PURE__ */ React.createElement(NextButton, {
      className: classnames("isTwoToFourCNCharBtn", className),
      ...restProps
    }, children);
  }
  if (React.Children.count(children) === 1 && children?.type?.displayName === "Config(Icon)") {
    return /* @__PURE__ */ React.createElement(NextButton, {
      className: classnames("isOnlyIcon", className),
      ...restProps
    }, children);
  }
  return /* @__PURE__ */ React.createElement(NextButton, {
    ...restProps
  }, children);
};
hoistNonReactStatics_cjs(Button, NextButton);
const exported = Button;
export {exported as e};
