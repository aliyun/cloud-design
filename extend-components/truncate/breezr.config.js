module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alicloudfe/components-console-page',
        useTypescript: true,
        disableStyleRemove: true,
        externals: {
          '@alicloudfe/components': '@alicloudfe/components',
          'react-router-dom': 'react-router-dom'
        }
      }
    ]
  ]
}
