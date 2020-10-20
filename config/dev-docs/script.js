const glob = require('globby')
const path = require('path')
const fs = require('fs-extra')

const unified = require('unified')
const remarkParse = require('remark-parse')
const assertMdAST = require('mdast-util-assert')
const removePosition = require('unist-util-remove-position')
const remarkFrontmatter = require('remark-frontmatter')
const remarkStringify = require('remark-stringify')

const ignoreComponentNames = ['core']

;(async () => {
  const baseDir = path.resolve(__dirname, '../../base-components/src')

  const files = await glob('*/index.md', {
    cwd: baseDir
  })

  await Promise.all(
    files.map(async file => {
      const componentName = file.match(/(.*)\/index.md$/)[1]
      if (ignoreComponentNames.includes(componentName)) return

      const content = await fs.readFile(path.join(baseDir, file), 'utf-8')
      const output = await getAPIFromMarkdown(content, componentName)
      const outPath = path.resolve(
        __dirname,
        './contents/',
        `${componentName}.md`
      )
      fs.writeFile(outPath, output)
    })
  )
})()

async function getAPIFromMarkdown(markdown, debugName) {
  const ast = parseMarkdown(markdown)
  const APINodes = getAPINodes(ast, debugName)
  return ASTNodesToString(APINodes)
}

const stringifyPipeline = unified().use(remarkStringify)
function ASTNodesToString(ASTNodes) {
  const ast = {
    type: 'root',
    children: [...ASTNodes]
  }
  assertMdAST(ast)
  return stringifyPipeline.stringify(ast)
}

const parsePipeline = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
function parseMarkdown(str) {
  const ast = removePosition(parsePipeline.parse(str))
  assertMdAST(ast)
  return ast
}

function getAPINodes(ast, debugName) {
  let startIndex = -1
  let endIndex = -1
  let APIheaderLevel = -1
  ast.children.forEach((node, index) => {
    if (
      startIndex < 0 &&
      node.type === 'heading' &&
      node.children[0] &&
      node.children[0].type === 'text' &&
      /^API$/i.test(node.children[0].value)
    ) {
      startIndex = index
      APIheaderLevel = node.depth
      return
    }
    if (startIndex < 0) return
    if (
      endIndex < 0 &&
      node.type === 'heading' &&
      node.depth <= APIheaderLevel
    ) {
      endIndex = index
    }
  })
  if (startIndex < 0) {
    throw new Error(`can't find API header! ${debugName}`)
  }
  if (endIndex < 0) {
    endIndex = ast.children.length
  }
  return ast.children.slice(startIndex + 1, endIndex)
}
