module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alife/alicloud-components-console-page',
        useTypescript: true,
        disableStyleRemove: true,
        useTerserPlugin: true,
        externals: {
          '@alife/alicloud-components': '@alife/alicloud-components',
          'react-router-dom': 'react-router-dom'
        }
      }
    ]
  ]
}
