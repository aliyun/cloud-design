module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alicloudfe/components-console-menu',
        useTypescript: true,
        disableStyleRemove: true,
        externals: {
          '@alicloudfe/components': '@alicloudfe/components',
        }
      }
    ]
  ]
}
