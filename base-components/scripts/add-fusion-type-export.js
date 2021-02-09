const fs = require('fs-extra')
const path = require('path')
const { getComponentNames } = require('./utils')

getComponentNames().forEach((name) => {
  const dtsPath = path.resolve(__dirname, `../types/${name}/index.d.ts`)
  let content = fs.readFileSync(dtsPath, 'utf-8')
  content += `\nexport * from '@alifd/next/types/${name}'\n`
  fs.writeFileSync(dtsPath, content)
})
