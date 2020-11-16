import { IDemoOpts } from '@alicloud/console-toolkit-preset-docs'

export default {
  modifyDisplayCode: ({ code }) => {
    return code.replace(/next-/, 'xdemo-')
  }
} as IDemoOpts
