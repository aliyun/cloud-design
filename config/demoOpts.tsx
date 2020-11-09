import { IDemoOpts } from '@alicloud/console-toolkit-preset-multi-entry/types'

export default {
  modifyDisplayCode: ({ code }) => {
    return code.replace(/next-/, 'xdemo-')
  }
} as IDemoOpts
