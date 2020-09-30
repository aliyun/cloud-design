const path = require('path');
const chalk = require('chalk');
const download = require('download');
const fs = require('fs-extra');
const themes = require('./theme-data');
const cwd = process.cwd();
const log = console.log;

const getThemeSource = async(packageName, themeName) => {
  const unpkgUrl = 'https://unpkg.alibaba-inc.com/';
  const themePath = path.join(cwd, `fusion-theme/${themeName}`);
  log(chalk.green('empty files...'));
  fs.emptyDirSync(themePath);
  try {
    await download(`${unpkgUrl}${packageName}/dist/next.var.css`, themePath);
    await download(`${unpkgUrl}${packageName}/dist/next-noreset.var.css`, themePath);
    await download(`${unpkgUrl}${packageName}/variables.css`, themePath);
    log(chalk.green(`update theme ${themeName} successfully`));
  } catch(err) {
    console.error(err);
  }
}

themes.forEach(theme => {
  const { packageName, themeName } = theme;
  getThemeSource(packageName, themeName);
})

