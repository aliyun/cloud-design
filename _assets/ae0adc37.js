import {O as HOC, I as useState, a9 as useCallback, R as React, d as classnames} from "./index.7e05a4b9.js";
import {N as NextSearch} from "./5e254bad.js";
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
