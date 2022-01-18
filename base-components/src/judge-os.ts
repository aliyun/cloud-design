// 判断操作系统，如果是 windows 的话在 body 上加一个类名用来区分
const isBrowser = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'

const judgeOs = () => {
  if (isBrowser()) {
    if (window && window.navigator) {
      const agent = navigator?.userAgent?.toLowerCase()
      if (
        agent.indexOf('win32') >= 0 ||
        agent.indexOf('wow32') >= 0 ||
        agent.indexOf('win64') >= 0 ||
        agent.indexOf('wow64') >= 0
      ) {
        if (window.document && window.document.body) {
          if (!document.body?.classList?.contains('isWindows')) {
            document.body.classList.add('isWindows')
          }
        }
      } else if (/macintosh|mac os x/i.test(navigator?.userAgent)) {
        if (window.document && window.document.body) {
          if (!document.body?.classList?.contains('isMac')) {
            document.body.classList.add('isMac')
          }
        }
      }
    }
  }
}

export default judgeOs
