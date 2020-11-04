import {ac as createElement} from "./index.09bdaa64.js";
const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return /* @__PURE__ */ createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, /* @__PURE__ */ createElement("h1", null, `开发环境说明`), /* @__PURE__ */ createElement("p", null, `这是组件的本地开发环境。你可以开发用例将组件的 demo 目录下，这个目录下的每个 tsx/jsx/mdx 会成为一个页面。`), /* @__PURE__ */ createElement("p", null, `在 demo 中，你可以 `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `import {xxx} from '@alicloudfe/components'`), `，从用户的视角来 import 组件库，而不应该用相对路径，以便我们将 demo 通过文档透出给用户。`, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `@alicloudfe/components`), `会被映射到`, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `src/index.ts`)));
}
MDXContent.isMDXComponent = true;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: MDXContent
});
const modules = {};
modules["main"] = m0;
export default modules;
