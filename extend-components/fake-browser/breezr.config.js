module.exports = {
  presets: [
    [
      '@alicloud/console-toolkit-preset-wind-component',
      {
        moduleName: '@alife/alicloud-components-fake-browser',
        useTypescript: true,
        disableStyleRemove: true,
        externals: {
          '@alife/alicloud-components': '@alife/alicloud-components',
          'react-router-dom': 'react-router-dom'
        }
      }
    ]
  ]
}
