const path = require('path')
const fs = require('fs-extra')

const deleteVarPrefix = [
  '--search',
  '--nav',
  '--calendar',
  '--checkbox',
  '--menu',
  '--range',
  '--switch',
  '--tree',
  '--badge',
  '--message',
  '--pagination',
  '--radio',
  '--step',
  '--tab',
  '--timeline',
  '--cascader',
  '--input',
  '--upload',
  '--number',
  '--transfer',
  '--time-picker',
  '--typography',
  '--divider',
  '--collapse',
  '--slick',
  '--breadcrumb',
  '--date-picker',
  '--list',
  '--split',
  '--loading',
  '--shell',
  '--progress',
  '--popup',
  '--rating',
  '--balloon',
  '--active',
  '--avatar',
  '--layout',
  '--number-picker',
  '--select-menu',
  '--time-pikcer',
  '--time-pikcer2',
  '--date-picker2',
  '--select',
  '--form',
  '--mask',
  '--drawer',
  '--tag',
  '--dialog',
  '--table',
  '--btn',
  '--card',
  '--color-data',
  '--color-data2',
  '--color-gradient',
  '--icon-content',
  '--color-other'
]

const baseVarPrefix = [
  '--color-',
  '--line-',
  '--s-',
  '--size-',
  '--shadow-',
  '--font-',
  '--corner-'
]

const whiteVarListA = [
  '--btn-pure-normal-border-color',
  'color-other-1',
  'color-other-2',
  'color-other-1',
  '--table-row-bg',
  '--dialog-footer-bg-color'
]

const whiteVarList = [
  ...whiteVarListA,
  '--search-before-title-icon-padding',
  '--pagination-item-disabled-bg',
  '--nav-ver-height',
  '--active-shadow',
  '--active-transition',
  '--dialog-header-close-bg-width',
  '--dialog-header-close-bg-height',
  '--btn-primary-hover-shadow',
  '--btn-primary-active-shadow',
  '--btn-normal-hover-shadow',
  '--btn-normal-active-shadow',
  '--search-normal-primary-btn-hover-bg-color',
  '--search-simple-normal-hover-color',
  '--search-simple-normal-icon-hover-text-color',
  '--search-normal-normal-hover-color',
  '--search-normal-normal-btn-bg-color',
  '--search-normal-normal-btn-hover-bg-color',
  '--search-normal-normal-m-btn-text-size',
  '--search-normal-normal-l-btn-text-size',
  '--search-simple-l-icon-margin-right',
  '--search-normal-normal-btn-text-color',
  '--search-normal-normal-btn-hover-text-color',
  '--search-normal-primary-color',
  '--search-normal-primary-hover-color',
  '--search-normal-primary-split-color',
  '--search-normal-primary-btn-text-color',
  '--search-normal-primary-btn-hover-text-color',
  '--search-normal-secondary-color',
  '--search-normal-secondary-split-color',
  '--search-normal-secondary-hover-color',
  '--search-normal-secondary-m-btn-text-size',
  '--search-normal-normal-split-color',
  '--search-normal-dark-m-btn-text-size',
  '--search-simple-normal-split-color',
  '--search-simple-normal-icon-text-color',
  '--nav-normal-border-color',
  '--nav-normal-text-color',
  '--nav-normal-sub-nav-text-color',
  '--nav-normal-item-hover-bg-color',
  '--nav-normal-sub-nav-hover-bg-color',
  '--nav-normal-sub-nav-hover-text-color',
  '--nav-normal-item-selected-bg-color',
  '--nav-normal-item-selected-text-color',
  '--nav-normal-item-selected-text-style',
  '--nav-normal-item-selected-active-color',
  '--nav-normal-sub-nav-selected-bg-color',
  '--nav-normal-sub-nav-selected-text-color',
  '--nav-normal-item-opened-bg-color',
  '--nav-normal-item-opened-text-color',
  '--nav-line-item-selected-text-style',
  '--nav-normal-bg-color',
  '--nav-normal-sub-nav-bg-color',
  '--nav-normal-item-hover-active-color',
  '--nav-line-text-color',
  '--nav-line-item-hover-bg-color',
  '--nav-line-item-hover-text-color',
  '--nav-line-item-selected-bg-color',
  '--nav-line-item-selected-text-color',
  '--nav-line-item-opened-text-color',
  '--calendar-fullscreen-table-cell-hover-background',
  '--calendar-fullscreen-table-cell-hover-color',
  '--calendar-fullscreen-table-cell-normal-background',
  '--calendar-fullscreen-table-cell-other-background',
  '--calendar-fullscreen-table-cell-other-border-color',
  '--calendar-card-table-cell-normal-background',
  '--calendar-card-table-cell-normal-border-color',
  '--calendar-card-table-cell-hover-color',
  '--calendar-card-table-head-color',
  '--calendar-btn-date-font-weight',
  '--calendar-btn-arrow-color',
  '--calendar-btn-arrow-color-hover',
  '--calendar-fullscreen-table-cell-normal-border-color',
  '--calendar-fullscreen-table-cell-current-background',
  '--calendar-fullscreen-table-cell-other-color',
  '--calendar-fullscreen-table-cell-disabled-background',
  '--calendar-fullscreen-table-cell-disabled-color',
  '--calendar-card-table-cell-normal-color',
  '--calendar-card-table-cell-select-border-color',
  '--calendar-card-table-cell-other-background',
  '--calendar-card-table-cell-other-border-color',
  '--calendar-card-table-cell-disabled-background',
  '--calendar-card-table-cell-disabled-border-color',
  '--calendar-card-table-cell-current-background',
  '--calendar-card-table-cell-inrange-background',
  '--calendar-card-table-cell-inrange-color',
  '--calendar-card-table-cell-inrange-border-color',
  '--checkbox-border-color',
  '--checkbox-bg-color',
  '--checkbox-hovered-border-color',
  '--checkbox-label-color',
  '--checkbox-disabled-circle-color',
  '--checkbox-disabled-bg-color',
  '--checkbox-hovered-bg-color',
  '--menu-btn-pure-text-normal-icon-color',
  '--menu-background-selected',
  '--menu-background',
  '--menu-icon-selected-hover-color',
  '--menu-icon-selected-color',
  '--menu-padding-ver-padding-lr',
  '--menu-padding-title-horizontal',
  '--menu-divider-margin-hoz',
  '--menu-color',
  '--menu-color-selected',
  '--menu-color-hover',
  '--menu-arrow-color',
  '--menu-divider-color',
  '--range-normal-unselected-color',
  '--range-normal-selected-color',
  '--range-normal-selected-color-disabled',
  '--range-normal-slider-bg-color-disabled',
  '--range-normal-unselected-color-hover',
  '--range-normal-selected-color-hover',
  '--range-normal-slider-border-color-disabled',
  '--range-normal-mark-selected-color-disabled',
  '--range-normal-slider-bg-color',
  '--range-normal-slider-bg-color-hover',
  '--switch-disabled-on-trigger-bg-color',
  '--switch-normal-off-bg-color',
  '--switch-disabled-off-bg-color',
  '--switch-disabled-off-trigger-bg-color',
  '--switch-normal-on-bg-color',
  '--switch-hover-on-bg-color',
  '--switch-normal-off-border-color',
  '--switch-hover-off-bg-color',
  '--tree-node-selected-color',
  '--tree-node-normal-color',
  '--tree-switch-arrow-color',
  '--tree-node-hover-color',
  '--tree-switch-hover-arrow-color',
  '--tree-switch-icon-color',
  '--tree-line-color',
  '--tree-switch-hover-icon-color',
  '--tree-switch-hover-bg-color',
  '--tree-switch-border-color',
  '--tree-switch-hover-border-color',
  '--tree-node-normal-background',
  '--tree-switch-bg-color',
  '--tree-node-selected-background',
  '--tree-node-disabled-background',
  '--tree-select-background',
  '--message-success-color-icon-addon',
  '--message-error-color-icon-addon',
  '--message-warning-color-icon-addon',
  '--message-notice-color-icon-toast',
  '--message-error-color-bg-inline',
  '--message-warning-color-bg-inline',
  '--message-notice-color-bg-inline',
  '--message-loading-color-bg-inline',
  '--message-success-color-bg-inline',
  '--message-success-color-border-toast',
  '--message-error-color-border-toast',
  '--message-warning-color-border-toast',
  '--message-notice-color-border-toast',
  '--message-help-color-border-toast',
  '--message-loading-color-border-toast',
  '--message-help-color-bg-inline',
  '--message-help-color-icon-toast',
  '--message-success-color-content-toast',
  '--message-error-color-content-toast',
  '--message-error-color-content-inline',
  '--message-warning-color-content-inline',
  '--message-warning-color-content-toast',
  '--message-notice-color-content-inline',
  '--message-notice-color-content-toast',
  '--message-help-color-content-inline',
  '--message-help-color-content-toast',
  '--message-loading-color-content-inline',
  '--message-loading-color-content-toast',
  '--message-success-color-content-inline',
  '--message-close-icon-color',
  '--message-hover-close-icon-color',
  '--message-help-icon-content',
  '--message-notice-color-icon-inline',
  '--message-help-color-icon-inline',
  '--message-loading-color-icon-inline',
  '--message-border-style-toast',
  '--message-success-color-bg-toast',
  '--message-error-color-bg-toast',
  '--message-warning-color-bg-toast',
  '--message-notice-color-bg-toast',
  '--message-help-color-bg-toast',
  '--message-help-color-content-addon',
  '--message-loading-color-bg-toast',
  '--message-loading-color-content-addon',
  '--message-loading-color-icon-toast',
  '--pagination-current-color',
  '--pagination-total-color',
  '--pagination-item-color',
  '--pagination-item-border-color',
  '--pagination-item-bg',
  '--pagination-icon-ellipsis-content',
  '--pagination-arrow-hover-color',
  '--pagination-arrow-color',
  '--pagination-item-current-hover-bg',
  '--pagination-ellipsis-color',
  '--pagination-jump-color',
  '--radio-border-color',
  '--radio-disabled-border-color',
  '--radio-checked-disabled-border-color',
  '--radio-checked-bg-color',
  '--radio-hovered-bg-color',
  '--radio-checked-disabled-bg-color',
  '--radio-normal-font-color-disabled',
  '--radio-checked-disabled-circle-color',
  '--radio-button-border-color-checked',
  '--radio-button-height-large',
  '--radio-button-height-small',
  '--radio-button-font-color',
  '--radio-button-font-color-hovered',
  '--radio-button-corner-large',
  '--radio-bg-color',
  '--radio-normal-font-color',
  '--radio-button-bg-color',
  '--radio-button-bg-color-checked',
  '--radio-button-font-color-checked',
  '--step-circle-item-title-process-color',
  '--step-circle-item-node-finish-border-color',
  '--step-circle-item-title-finish-color',
  '--step-circle-item-content-margin-top',
  '--step-circle-item-node-process-size',
  '--step-circle-item-node-border-width',
  '--step-circle-item-tail-process-color',
  '--step-dot-item-tail-wait-color',
  '--step-dot-item-tail-process-color',
  '--step-dot-vertical-item-tail-size',
  '--step-circle-item-node-wait-border-color',
  '--step-circle-item-node-wait-background',
  '--step-circle-item-node-wait-color',
  '--step-circle-item-tail-finish-color',
  '--step-circle-item-node-process-color',
  '--step-circle-item-node-finish-color',
  '--step-circle-item-node-disabled-border-color',
  '--step-circle-item-node-disabled-background',
  '--step-circle-vertical-item-title-margin-top',
  '--step-circle-item-tail-bg-color',
  '--step-dot-item-dot-border-width',
  '--step-dot-item-title-process-color',
  '--step-dot-item-title-finish-color',
  '--step-dot-item-node-wait-background',
  '--step-dot-item-node-finish-border-color',
  '--step-dot-item-node-finish-background',
  '--step-dot-item-node-disabled-border-color',
  '--step-dot-item-node-disabled-background',
  '--step-dot-vertical-item-content-margin-top',
  '--step-dot-item-tail-bg-color',
  '--table-row-selected-bg',
  '--table-th-bg',
  '--table-normal-border-color',
  '--table-group-th-bg',
  '--table-group-th-color',
  '--table-group-footer-color',
  '--table-row-hover-color',
  '--table-row-hover-bg',
  '--table-row-color',
  '--table-th-color',
  '--tab-wrapped-border-line-color',
  '--tab-wrapped-bg-color',
  '--tab-capsule-bg-color',
  '--tab-capsule-bg-color-hover',
  '--tab-capsule-tab-border-line-color',
  '--tab-capsule-tab-border-line-color-hover',
  '--tab-pure-text-color-selected',
  '--tab-capsule-bg-color-selected',
  '--tab-capsule-text-color-hover',
  '--tab-item-font-weight-selected',
  '--tab-wrapped-border-line-width',
  '--tab-wrapped-border-side-width',
  '--tab-wrapped-content-border-line-width',
  '--tab-pure-divider-border-color',
  '--tab-wrapped-text-color',
  '--tab-wrapped-text-color-hover',
  '--tab-wrapped-text-color-selected',
  '--tab-wrapped-bg-color-selected',
  '--tab-capsule-text-color',
  '--tab-text-text-color-normal',
  '--tab-text-text-color-hover',
  '--tab-text-text-color-selected',
  '--timeline-item-done-background',
  '--timeline-item-body-margin-top',
  '--timeline-item-title-margin-top',
  '--timeline-item-title-color',
  '--timeline-item-body-color',
  '--timeline-item-done-dot-size',
  '--timeline-item-process-dot-size',
  '--timeline-item-success-dot-size',
  '--timeline-item-error-dot-size',
  '--cascader-menu-border-color',
  '--cascader-menu-icon-expand-color',
  '--cascader-menu-item-expanded-background-color',
  '--input-bg-color',
  '--input-addon-bg-color',
  '--input-feedback-warning-bg-color',
  '--input-feedback-warning-color',
  '--input-feedback-error-bg-color',
  '--input-border-color',
  '--input-hover-border-color',
  '--input-focus-border-color',
  '--input-hint-color',
  '--input-label-color',
  '--input-hint-hover-color',
  '--input-focus-shadow-spread',
  '--input-disabled-border-color',
  '--input-feedback-warning-icon',
  '--upload-image-list-close-icon-size',
  '--upload-image-list-close-icon-right',
  '--upload-text-list-bg-color',
  '--upload-image-list-item-picture-border-color',
  '--upload-card-list-corner',
  '--upload-card-add-text-margin-top',
  '--upload-card-list-progressbar-height',
  '--upload-drag-zone-upload-icon-color',
  '--upload-card-border-style',
  '--upload-card-border-color',
  '--upload-text-list-close-icon-color',
  '--upload-text-list-close-icon-color-hover',
  '--upload-text-list-name-font-color',
  '--upload-card-font-color',
  '--upload-card-icon-color',
  '--upload-card-hover-font-color',
  '--upload-image-list-item-bg-color',
  '--upload-image-list-item-uploading-bg-color',
  '--upload-image-list-item-error-bg-color',
  '--number-picker-normal-m-input-width',
  '--number-picker-normal-l-input-width',
  '--transfer-panel-background-color',
  '--transfer-panel-header-background-color',
  '--transfer-panel-footer-background-color',
  '--time-picker-menu-border-color',
  '--time-picker-menu-item-color-disabled',
  '--time-picker-menu-item-background-selected',
  '--time-picker-menu-title-color',
  '--time-picker-panel-background',
  '--time-picker-menu-title-background',
  '--time-picker-menu-item-color',
  '--time-picker-menu-item-color-hover',
  '--time-picker-menu-item-color-selected',
  '--time-picker-menu-item-background',
  '--time-picker-menu-item-background-disabled',
  '--typography-text-mark-background',
  '--typography-text-color',
  '--divider-hoz-color',
  '--divider-hoz-text-color',
  '--collapse-panel-border-color',
  '--collapse-title-font-color',
  '--collapse-title-hover-font-color',
  '--collapse-content-color',
  '--collapse-border-width',
  '--collapse-title-border-width',
  '--collapse-title-bg-color',
  '--collapse-title-hover-bg-color',
  '--collapse-icon-color',
  '--collapse-icon-hover-color',
  '--collapse-content-bg-color',
  '--breadcrumb-text-current-color',
  '--breadcrumb-text-color',
  '--breadcrumb-icon-color',
  '--date-picker-panel-background',
  '--list-size-s-title-font-size',
  '--list-size-s-title-font-weight',
  '--list-size-s-item-title-font-size',
  '--list-size-m-item-content-font-size',
  '--list-size-m-item-title-font-size',
  '--list-content-color',
  '--split-btn-trigger-normal-icon-color',
  '--shell-light-header-color',
  '--shell-light-header-background',
  '--shell-light-header-shadow',
  '--shell-light-navigation-ver-background',
  '--shell-light-navigation-ver-divider-size',
  '--shell-light-navigation-ver-divider-color',
  '--shell-light-content-background',
  '--shell-dark-navigation-ver-background',
  '--shell-brand-navigation-ver-background',
  '--progress-circle-underlay-color',
  '--progress-line-error-color',
  '--progress-line-success-color',
  '--progress-line-started-color',
  '--progress-line-middle-color',
  '--progress-line-finishing-color',
  '--progress-circle-error-color',
  '--progress-circle-success-color',
  '--progress-circle-started-color',
  '--progress-circle-middle-color',
  '--progress-circle-finishing-color',
  '--progress-line-underlay-color',
  '--progress-circle-text-color',
  '--progress-line-normal-color',
  '--popup-local-shadow',
  '--popup-local-border-width',
  '--popup-local-border-color',
  '--rating-normal-underlay-color',
  '--rating-grade-low-overlay-color',
  '--balloon-primary-color',
  '--balloon-primary-color-close',
  '--balloon-normal-border-width',
  '--balloon-size-arrow-size',
  '--balloon-corner',
  '--balloon-normal-color-border',
  '--balloon-normal-shadow',
  '--balloon-title-font-size',
  '--balloon-primary-color-bg',
  '--balloon-tooltip-color-bg',
  '--balloon-normal-color-bg',
  '--balloon-normal-color-close',
  '--balloon-normal-color-close-hover',
  '--select-color',
  '--form-element-preview-label-color',
  '--form-element-medium-icon-size',
  '--form-help-color',
  '--form-label-color',
  '--drawer-title-border-color',
  '--drawer-content-padding-top',
  '--drawer-bg',
  '--drawer-title-bg-color',
  '--drawer-content-color',
  '--drawer-close-color',
  '--drawer-close-color-hovered',
  '--drawer-footer-bg-color',
  '--drawer-footer-border-color',
  '--tag-fill-text-color',
  '--tag-closable-normal-bg',
  '--tag-fill-tail-color',
  '--tag-fill-text-color-hover',
  '--tag-fill-tail-color-hover',
  '--tag-secondary-bg-hover',
  '--tag-checkable-normal-bg',
  '--tag-checkable-normal-bg-hover',
  '--tag-closable-primary-fill-text-color',
  '--tag-closable-primary-fill-text-color-hover',
  '--tag-closable-primary-fill-border-color-disabled',
  '--tag-closable-primary-fill-bg-color-disabled',
  '--tag-closable-primary-fill-bg-color',
  '--tag-closable-bordered-bg',
  '--tag-bordered-bg',
  '--tag-size-l-icon-font',
  '--tag-checkable-normal-border-color',
  '--tag-checkable-normal-border-color-hover',
  '--tag-size-l-tick-icon-bg-size',
  '--tag-size-m-tick-icon-bg-size',
  '--tag-size-s-tick-icon-bg-size',
  '--tag-bordered-text-color',
  '--tag-closable-normal-icon-color-disabled',
  '--tag-closable-normal-bg-hover',
  '--tag-closable-bordered-bg-hover',
  '--tag-bordered-text-color-hover',
  '--tag-checkable-normal-border-selected-disabled',
  '--tag-checkable-normal-tick-bg-selected-disabled',
  '--tag-closable-primary-fill-bg-color-hover',
  '--tag-closable-normal-icon-color-hover',
  '--tag-closable-bordered-tail-color',
  '--tag-fill-border-color',
  '--tag-fill-border-color-hover',
  '--tag-bordered-border-color',
  '--tag-bordered-border-color-hover',
  '--tag-fill-border-color-disabled',
  '--tag-closable-bordered-border-color',
  '--tag-closable-bordered-border-color-hover',
  '--tag-closable-primary-fill-border-color',
  '--tag-closable-primary-fill-border-color-hover',
  '--tag-closable-bordered-text-color',
  '--tag-closable-bordered-text-color-hover',
  '--tag-closable-bordered-tail-color-hover',
  '--tag-bordered-bg-hover',
  '--tag-checkable-normal-text-color',
  '--tag-checkable-normal-text-color-hover',
  '--tag-checkable-fill-text-color',
  '--tag-checkable-fill-bg-color',
  '--tag-checkable-fill-border-color',
  '--tag-checkable-fill-text-color-hover',
  '--tag-checkable-fill-bg-color-hover',
  '--tag-checkable-fill-border-color-hover',
  '--tag-checkable-primary-text-color',
  '--tag-checkable-primary-border-color',
  '--tag-checkable-primary-text-color-hover',
  '--tag-checkable-primary-bg-color-hover',
  '--tag-checkable-primary-border-color-hover',
  '--tag-checkable-normal-icon-color-selected-disabled',
  '--dialog-title-padding-bottom',
  '--dialog-content-font-size',
  '--dialog-close-color',
  '--dialog-close-color-hovered',
  '--dialog-content-color',
  '--dialog-title-padding-top',
  '--dialog-content-padding-top',
  '--dialog-content-padding-bottom',
  '--dialog-footer-padding-bottom',
  '--dialog-bg',
  '--dialog-title-border-color',
  '--btn-pure-color-disabled',
  '--btn-pure-bg-disabled',
  '--btn-pure-border-color-disabled',
  '--btn-pure-normal-bg',
  '--btn-warning-primary-color-disabled',
  '--btn-warning-normal-color',
  '--btn-warning-normal-border-color',
  '--btn-warning-normal-border-color-hover',
  '--btn-warning-normal-border-color-disabled',
  '--btn-warning-normal-bg-disabled',
  '--btn-pure-primary-bg-hover',
  '--btn-ghost-light-border-color',
  '--btn-warning-normal-bg',
  '--btn-pure-normal-border-color-disabled',
  '--btn-pure-primary-color-disabled',
  '--btn-pure-normal-bg-active',
  '--btn-pure-primary-bg-active',
  '--btn-warning-normal-bg-hover',
  '--btn-pure-normal-border-color-active',
  '--btn-pure-normal-bg-disabled',
  '--btn-pure-secondary-bg-disabled',
  '--btn-pure-primary-bg-disabled',
  '--btn-pure-primary-border-color-disabled',
  '--btn-warning-primary-bg-disabled',
  '--btn-warning-normal-border-color-active',
  '--btn-pure-secondary-bg-hover',
  '--btn-pure-secondary-bg-active',
  '--btn-text-primary-color-hover',
  '--btn-size-s-icon-size',
  '--btn-pure-normal-border-color-hover',
  '--btn-shadow-hover',
  '--btn-pure-normal-color',
  '--btn-pure-normal-color-hover',
  '--btn-pure-normal-color-active',
  '--btn-text-normal-color',
  '--card-background',
  '--card-border-color',
  '--card-sub-title-color',
  '--card-title-font-weight',
  '--card-body-padding-bottom',
  '--card-content-color',
  '--card-body-show-divider-padding-top',
  '--timeline-item-node-padding',
  '--date-picker2-time-bg'
]
// 递归文件
const fileDisplay = (filePath) => {
  let filesList = []
  const files = fs.readdirSync(filePath)
  //遍历读取到的文件列表
  files.forEach((filename) => {
    const filedir = path.join(filePath, filename)
    const stats = fs.statSync(filedir)
    const isFile = stats.isFile()
    const isDir = stats.isDirectory()
    if (isFile) {
      filesList.push(filedir)
    }
    if (isDir) {
      const list = fileDisplay(filedir)
      filesList = [...filesList, ...list]
    }
  })

  return filesList
}

// 获取被用到的变量
const getWhiteVar = () => {
  let whiteCssVar = []
  const filesList = fileDisplay(path.join(__dirname, '../src'))
  const cssFilesList = filesList.filter((file) => /.+(\.css|\.scss)/.test(file))

  cssFilesList.forEach((cssPath) => {
    const cssData = fs.readFileSync(cssPath, 'utf8')
    const reg = new RegExp(
      `(?<=var\\(\\s*)(${deleteVarPrefix.join('|')}).*?(?=(\\s*,|\\s*\\)))`,
      'g'
    )
    const vars = cssData.match(reg)
    if (vars) {
      whiteCssVar = [...whiteCssVar, ...cssData.match(reg)]
    }
  })

  // 过滤icon
  whiteCssVar = whiteCssVar.filter((item) => !/--icon-content-.*/.test(item))

  return Array.from(new Set([...(whiteCssVar || []), ...whiteVarList]))
  // return Array.from(new Set([...(whiteVarList || [])]))
}

// 替换二级变量
const replaceSecondVar = (css, cssVar) => {
  let result = css
  // 获取所有二级变量
  let secondVars = css
    .match(/(?=var\(\s*--).*?\)+/g)
    .filter((item) => {
      const reg = new RegExp(
        `var\\(\s*(${baseVarPrefix.join('|')}).*?\\)+`,
        'g'
      )
      return !reg.test(item)
    })
    .map((item) => {
      // 处理有时候右括号会取多的情况
      const leftNum = item.match(/\(/g)
      const rightNum = item.match(/\)/g)
      if (leftNum.length < rightNum.length) {
        return item.substring(
          0,
          item.length - (rightNum.length - leftNum.length)
        )
      }
      return item
    })

  secondVars = Array.from(new Set(secondVars))

  // 获取一级变量
  secondVars.forEach((item) => {
    // 二级变量名
    const secondVarName = item
      .match(/(?<=var\(\n*)--.*?(?=\n*(,|\)))/g)[0]
      .replace(/\s*/g, '')
      .replace(/\s{2,1000}/g, ' ')
    // 二级变量
    let secondVar = (cssVar || css).match(
      new RegExp(`\\s${secondVarName}:.*;`, 'g')
    )
    if (secondVar) {
      secondVar = secondVar[0].replace(/\n*/g, '')
      // secondVar = secondVar.replace(/\s{2,1000}/g, ' ')

      const secondVarName = secondVar.match(/--.*(?=:)/g)[0]

      if (!whiteVarList.includes(secondVarName)) {
        // 一级变量名
        const firstVar = secondVar.match(/(?<=var\(\n*)--.*?(?=\n*(,|\)))/g)

        if (firstVar && firstVar.length > 0) {
          // 查看引用的是二级变量还是一级变量
          if (
            new RegExp(`(?=(${baseVarPrefix.join('|')})).*`).test(firstVar[0])
          ) {
            // 一级变量 --color-notice-3: rgba(144,192,239,1);
            let firstVarValue = (cssVar || css).match(
              new RegExp(`(?!var\\()\\s${firstVar[0]}:.*;`, 'g')
            )

            // 除了 icon
            if (firstVarValue && !/--icon-content-.*/.test(firstVar[0])) {
              firstVarValue = firstVarValue[0]
                .replace(/\s*/g, '')
                // .replace(/\s{2,1000}/g, ' ')
                .replace(':', ',')
                .replace(';', ')')


              result = result.replace(
                new RegExp(item.replace(/\(/, '\\(').replace(/\)/, '\\)'), 'g'),
                `var(${firstVarValue}`
              )
            }
          } else {
            // 二级变量 暂时不处理 加入白名单。除了icon
            if (!/--icon-content-.*/.test(firstVar[0])) {
              whiteVarList.push(firstVar[0])
              whiteVarList.push(secondVarName)
            }
          }
        } else {
          // 3、无引用，直接给值
          const firstVarValue = secondVar
            .match(/(?<=:).*?(?=;)/g)[0]
            .replace(/\s*/g, '')
          result = result.replace(item, firstVarValue)
        }
      }
    }
  })

  return result
}

// 替换icon
const replaceIcon = (css, cssVar = '') => {
  let result = css
  // // 删除直接引用的icon
  // let result = css.replace(/\s+(?!-)content:\s*var\(\s*--icon-content-.*\);*/g, '')
  // // 删除使用二级变量引用的icon
  // const secondIconList = cssVar.match(/(?<=;\n*\s*)--.*:\s*var\(\s*--icon-content-.*\);/g) || []
  // const secondIconVarNameList = secondIconList.map(item => {
  //   return item.match(/(?!--icon)--.*?(?=:)/g)[0]
  // });

  // secondIconVarNameList.forEach( varName => {
  //   result = css.replace(new RegExp(`\\scontent:\\s*var\\(.*\\s*${varName};`, 'g'), '');
  //   result = css.replace(varName, '');
  // })

  // 删除引用到的二级变量
  const contentVars =
    css.match(/content:\s*"\\[\d\w]{4}";[\n\s]*content:\s*var\(--.*\s*\);/g) ||
    []
  const contentValueVars = contentVars.map(
    (item) => item.match(/[\n\s]*content:\s*var\(--.*\s*\);/g)[0]
  )

  contentValueVars.forEach((item) => {
    result = result.replace(item, '')
  })

  // 删除二次的content变量
  const contentTwo =
    result.match(/content:\s*"\\[\w\s]{4}";[\n\s]+content:\s*".{0,4}";/g) || []

  contentTwo.forEach((item) => {
    result = result.replace(item, item.match(/content:\s*"\\[\w\s]{4}";/g)[0])
  })

  return result
}

const filterCssVar = (css, cssVar) => {
  let result = replaceSecondVar(css, cssVar)

  result = replaceIcon(result, cssVar)

  const whiteVarPrefix = getWhiteVar()

  let deleteVars = []

  deleteVarPrefix.forEach((deletePrefix) => {
    const varsList = result.match(
      new RegExp(`\\s+(?!var\\()${deletePrefix}.*;`, 'g')
    )
    if (varsList) {
      deleteVars = [...deleteVars, ...varsList]
    }
  })

  deleteVars.forEach((varItem) => {
    const item = varItem.replace(/(^\n*\s*)|(\s*\n*$)/g, '')
    // console.log(`item.split(":")[0]`, item.split(":")[0]);
    if (!whiteVarPrefix.includes(item.split(':')[0])) {
      result = result.replace(item, '')
    }
  })

  // return result.replace(/\n\s*\n/g, '')
  return result.replace(/\n\s*\n/g, '')
}

module.exports = filterCssVar
