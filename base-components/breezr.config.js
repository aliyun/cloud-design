module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: 'AliCloudComponents',
        useTypescript: true,
        disableStyleRemove: true,
        externals: {
          'moment': 'moment',
        }
      }
    ]
  ]
}
