import {I as useState, W as useLayoutEffect} from "./index.e8c3f862.js";
let nextId = 0;
function useCssVar(cssVarName, elRef) {
  const [v, setV] = useState("");
  useLayoutEffect(() => {
    check();
    const id = nextId++;
    window["__recheck_css_var"] = window["__recheck_css_var"] ?? [];
    window["__recheck_css_var"][id] = check;
    return () => {
      delete window["__recheck_css_var"][id];
    };
    function check() {
      const el = elRef?.current ?? window.document.body;
      const val = window.getComputedStyle(el).getPropertyValue(cssVarName) ?? "";
      setV(val);
    }
  }, [elRef?.current, cssVarName]);
  return v;
}
export {useCssVar as u};
