module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alife/alicloud-components-console-menu',
        useTypescript: true,
        disableStyleRemove: true,
        externals: {
          '@alife/alicloud-components': '@alife/alicloud-components',
        }
      }
    ]
  ]
}
