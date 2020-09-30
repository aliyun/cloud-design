module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alife/alicloud-components-select-list',
        useTypescript: true,
        disableStyleRemove: true,
        externals: {
          '@alife/alicloud-components': '@alife/alicloud-components'
        }
      }
    ]
  ]
}
