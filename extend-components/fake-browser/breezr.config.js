module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alicloudfe/components-fake-browser',
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
