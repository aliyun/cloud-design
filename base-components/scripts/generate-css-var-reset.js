const fs = require('fs-extra')
const path = require('path')
const shouldGenerateCssVarReset = ['wind', 'xconsole', 'xconsole-dark']
const cwd = process.cwd()

function generateCssVarReset(code) {
  const matches = code.match(/--.*?:/g)
  if (!Array.isArray(matches)) return ''
  const lines = matches.map((m) => m + ' initial;').join('\n  ')

  return `#{$css-var-scope} {
  ${lines}
}`
}

shouldGenerateCssVarReset.forEach((themeName) => {
  const themePath = path.join(cwd, `src/theme/${themeName}`)
  const source = fs.readFileSync(
    path.join(themePath, 'css-var-custom.scss'),
    'utf-8'
  )
  const output = generateCssVarReset(source)
  fs.writeFileSync(path.join(themePath, 'css-var-custom-reset.scss'), output)
})
