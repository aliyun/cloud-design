const sass = require('sass')
const path = require('path')
const fs = require('fs-extra')
const postcss = require('postcss')
const themes = require('./theme-data')
const log = console.log
const chalk = require('chalk')
const filterCssVar = require('./filter-css-var')


const convertCharStr2CSS = ch => {
  let code = ch.charCodeAt(0).toString(16)
  while (code.length < 4) {
    code = `0${code}`
  }
  return `\\${code}`.toUpperCase()
}

const transferUniCodeCss = (source, theme) => {
  if (theme !== 'wind' &&
    !theme.startsWith('xconsole')) {
    return source.replace(/content:\s*(?:'|")([\u0080-\uffff])(?:'|")/g, (str, $1) => {
      return `content: "${convertCharStr2CSS($1)}"`
    })
      .replace(/content:\s*var\((--[\w-]+\,\s*)(?:'|")([\u0080-\uffff])(?:'|")\)/g, (str, $1, $2) => {
        return `content: var(${$1}"${convertCharStr2CSS($2)}")`
      })
      .replace(/(?!var\()--icon-content.*:\s*['"](.*?)['"]/g, (str, match) => {
        if (match) {
          return str.replace(/(?<=").*?(?=")/g, (char) => {
            return `${convertCharStr2CSS(char)}`;
          });
        }
        return str
      });

  } else {
    return source
  }
}

log(chalk.green('empty files...'))
fs.emptyDirSync(path.join(__dirname, '../dist'))

themes.forEach(async (theme) => {
  const { themeName } = theme
  // 生成未压缩过的 css
  log(`generate ${themeName}.css...`)
  const result = sass.renderSync({
    file: path.join(__dirname, `../src/theme/${themeName}/index.scss`)
  })

  let fileResult = transferUniCodeCss(result.css.toString(), themeName)

  fs.ensureDirSync(path.join(__dirname, '../dist'))
  fs.writeFileSync(path.join(__dirname, `../dist/${themeName}.css`), filterCssVar(transferUniCodeCss(result.css.toString(), themeName)))

  if (themeName.startsWith("hybridcloud")) {
    fileResult = withoutIconFont(fileResult)
    fs.ensureDirSync(path.join(__dirname, '../dist'))
    fs.writeFileSync(path.join(__dirname, `../dist/${themeName}-without-icon-font.css`), fileResult)
  }

  // 生成不带css var定义的css
  log(`generate ${themeName}-no-var.css...`)
  const noVarResult = sass.renderSync({
    file: path.join(__dirname, `../src/theme/${themeName}/index-no-var.scss`)
  })

  const indexNoRestPath = path.join(
    __dirname,
    `../src/theme/${themeName}/index-no-reset.scss`
  )
  if (fs.existsSync(indexNoRestPath)) {
    console.log('########')
    const noVarResult = sass.renderSync({
      file: indexNoRestPath
    })
    fs.writeFileSync(
      path.join(__dirname, `../dist/${themeName}-no-reset.css`),
      filterCssVar(transferUniCodeCss(noVarResult.css.toString(), themeName))
    )
  }


    // 生成每个主题的css-var定义文件，用于动态切换
    const cssVarDefinitionPath = path.join(
      __dirname,
      `../pages/theme-vars/${themeName}.scss`
    )
    const cssVarDefinitionResult = sass.renderSync({ file: cssVarDefinitionPath })
     // 去掉注释
     const varCss = cssVarDefinitionResult.css
     .toString()
     .replace(/\/\*[.\t\n\r\S\s]*?\*\//g, '')
    log(`generate ${themeName}-var.css...`)
    fs.writeFileSync(path.join(__dirname, `../dist/${themeName}-var.css`), filterCssVar(transferUniCodeCss(varCss, themeName)))

  // 去掉注释
  const noVarCss = noVarResult.css
    .toString()
    .replace(/\/\*[.\t\n\r\S\s]*?\*\//g, '')
  fs.ensureDirSync(path.join(__dirname, '../dist'))
  fs.writeFileSync(
    path.join(__dirname, `../dist/${themeName}-no-var.css`),
    filterCssVar(transferUniCodeCss(noVarCss, themeName), varCss)
  )

  // 生成压缩过的 css
  log(`generate ${themeName}.min.css...`)
  const unMinifyCssPath = path.join(__dirname, `../dist/${themeName}.css`)
  const unMinifyCssContent = fs.readFileSync(unMinifyCssPath)
  const minifyCssResult = (
    await postcss([
      require('cssnano')({
        preset: [
          'default',
          {
            calc: false,
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ]).process(unMinifyCssContent, { from: unMinifyCssPath })
  ).css

  fs.writeFileSync(
    path.join(__dirname, `../dist/${themeName}.min.css`),
    minifyCssResult
  )
})


// 修改css选择器的postcss插件
// function changePrefix(transform) {
//   return function (css) {
//     css.walkRules((rule) => {
//       const newSelectors = rule.selectors.map((selector) => {
//         const res = transform(selector)
//         if (res) return res
//         return selector
//       })
//       rule.selectors = newSelectors
//     })
//   }
// }

