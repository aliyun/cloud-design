import {O as HOC, L as useState, ad as useCallback, R as React, e as classnames} from "./index.b00c2d31.js";
import {N as NextSearch} from "./6947cf2c.js";
const Search = (props) => {
  const [focus, setFocus] = useState(false);
  const [visible, setVisible] = useState(false);
  const onFocus = useCallback((e) => {
    setFocus(true);
    if (typeof props.onFocus === "function") {
      props.onFocus(e);
    }
  }, [props.onFocus]);
  const onBlur = useCallback((e) => {
    setFocus(false);
    if (typeof props.onBlur === "function") {
      props.onBlur(e);
    }
  }, [props.onBlur]);
  const onVisibleChange = useCallback((v, ...rest) => {
    setVisible(v);
    if (typeof props.onVisibleChange === "function") {
      props.onVisibleChange(v, ...rest);
    }
  }, [props.onVisibleChange]);
  return /* @__PURE__ */ React.createElement(NextSearch, {
    ...props,
    onFocus,
    onBlur,
    onVisibleChange,
    className: classnames(props.className, props.searchText ? "custom-search-text" : null, focus ? "focusing" : false, visible ? "visible" : false, props.disabled ? "disabled" : false)
  });
};
var Search$1 = HOC(Search);
export {Search$1 as S};
