const glob = require('glob')
const fs = require('fs-extra')
const child = require('child_process')
const path = require('path')
const assert = require('assert')
const prettier = require('prettier')

// child.execSync('git clone')

const fusionDocs = '/Users/csr/workspace/next/docs'
const root = path.join(__dirname, '../')
const prettierConfig = fs.readJsonSync(path.join(root, '../.prettierrc'))

const blocklist = ['pagination/demo/react-router.md']

glob('*/demo/*.md', { cwd: fusionDocs }, (err, res) => {
  if (err) throw err

  res
    .filter((demoFile) => !blocklist.includes(demoFile))
    .forEach((demoFile) => {
      if (demoFile.includes('react-router')) console.log(demoFile)
      const match = /^(.*?)\/demo\/(.*)\.md/.exec(demoFile)
      const componentName = match[1]
      const demoFilePath = match[2]
      const content = fs.readFileSync(path.join(fusionDocs, demoFile), 'utf8')
      const contentLines = content.split('\n')
      // if (!/^\s*# (.*)/.exec(content)) debugger
      const title = /^\s*# (.*)/.exec(content)[1]
      let description = contentLines.find((line) => {
        return line && !line.startsWith('#') && !line.startsWith('-')
      })
      // 这个demo没有描述
      if (description.startsWith(':::')) description = ''
      assert(title)

      // if (!/```jsx([\s\S]*?)```/.exec(content)) debugger
      const demo = /```\s*jsx([\s\S]*?)```/.exec(content)[1]
      assert(demo)
      const reactdom_render_regexp = /^ReactDOM\.render\(([\s\S]*),\s*mountNode\s*(?:,\s*)?\);?/m
      if (
        content.match(
          /^ReactDOM\.render\(([\s\S]*),\s*mountNode\s*(?:,\s*)?\);?/gm
        ).length !== 1
      ) {
        throw new Error(`unexpected demo: ${demoFile}
      has multiple ReactDOM.render`)
      }
      // if (!reactdom_render_regexp.exec(content)) debugger
      const renderJSX = reactdom_render_regexp.exec(content)[1]
      assert(renderJSX)

      const cssMatch = /```\s*css([\s\S]*?)```/.exec(content)
      const css = cssMatch ? cssMatch[1] : ''

      let generateCode = demo.replace(reactdom_render_regexp, '')
      generateCode = generateCode.replace(
        /from ['"]@alifd\/next['"]/,
        `from '@alicloudfe/components'`
      )
      generateCode = generateCode.replace(
        /from ['"]react-router['"]/,
        `from 'react-router-dom'`
      )
      generateCode += `export default function DemoComponent() {
      return (<Style>${renderJSX}</Style>);
    }`
      generateCode += `const Style = styled.div\`${css}\`;`
      generateCode = `import styled from 'styled-components';\n` + generateCode

      if (
        !/import React/.test(generateCode) &&
        !/import * as React/.test(generateCode)
      )
        generateCode = `import * as React from 'react';\n` + generateCode

      generateCode = `
/**
 * @title ${title}
 * @description ${description}
 */

${generateCode}`

      generateCode = prettier.format(generateCode, {
        ...prettierConfig,
        parser: 'babel'
      })
      assert(!/@alif\/next/.test(generateCode))
      const writePath = path.join(
        root,
        `src/${componentName}/demo/${demoFilePath}.tsx`
      )
      fs.ensureDirSync(path.dirname(writePath))
      fs.writeFileSync(writePath, generateCode)
    })
})
