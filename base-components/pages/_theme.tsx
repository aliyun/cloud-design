import { createTheme } from 'vite-pages-theme-basic'
import React from 'react'
import { Select, ConfigProvider } from '@alicloudfe/components'
import './style.scss'

import './theme-vars/xconsole.scss'
import './theme-vars/wind.scss'
import './theme-vars/hybridcloud.scss'
import './theme-vars/hybridcloud-dark.scss'
import './theme-vars/yunxiao.scss'
import './theme-vars/yunxiao-dark.scss'
import './theme-vars/aone.scss'
import './theme-vars/teamix.scss'
import './theme-vars/b-design.scss'

const dataSource = [
  { label: '公有云主题', value: 'theme-xconsole' },
  { label: '公有云主题(经典)', value: 'theme-wind' },
  { label: '混合云亮色主题', value: 'theme-hybridcloud' },
  { label: '混合云暗色主题', value: 'theme-hybridcloud-dark' },
  { label: '云效亮色主题', value: 'theme-yunxiao' },
  { label: '云效暗色主题', value: 'theme-yunxiao-dark' },
  { label: 'Aone主题', value: 'theme-aone' },
  { label: 'Teamix主题', value: 'theme-teamix' },
  { label: 'B-design主题', value: 'theme-b-design' }
]

const mapThemeToImport = {
  'theme-xconsole': () =>
    import('../src/theme/xconsole/index-no-var.scss?pureCSS'),
  // 经典wind主题也使用xconsole基础样式，确保我们仅通过切换css-var就能升级
  'theme-wind': () => import('../src/theme/xconsole/index-no-var.scss?pureCSS'),
  'theme-hybridcloud': () =>
    import('../src/theme/hybridcloud/index-no-var.scss?pureCSS'),
  'theme-hybridcloud-dark': () =>
    import('../src/theme/hybridcloud-dark/index-no-var.scss?pureCSS'),
  'theme-yunxiao': () =>
    import('../src/theme/yunxiao/index-no-var.scss?pureCSS'),
  'theme-yunxiao-dark': () =>
    import('../src/theme/yunxiao-dark/index-no-var.scss?pureCSS'),
  'theme-aone': () => import('../src/theme/aone/index-no-var.scss?pureCSS'),
  'theme-teamix': () => import('../src/theme/teamix/index-no-var.scss?pureCSS'),
  'theme-b-design': () =>
    import('../src/theme/b-design/index-no-var.scss?pureCSS')
}

const styleEl = document.createElement('style')
styleEl.className = 'theme-switcher'
styleEl.setAttribute('type', 'text/css')
document.head.appendChild(styleEl)
loadTheme('theme-xconsole')

const ToggleTheme = () => {
  const onChange = (val: string) => {
    loadTheme(val)
  }
  return (
    <ConfigProvider prefix="next-">
      <Select
        dataSource={dataSource}
        onChange={onChange}
        defaultValue="theme-xconsole"
        followTrigger
      />
    </ConfigProvider>
  )
}

// 我们可以创建我们自己的主题，定制页面上的任何区域

export default createTheme({
  topNavs: [
    {
      text: '走查稿',
      href:
        'https://yuque.antfin-inc.com/docs/share/c343f5a6-0b4e-4653-8739-9038a3adccc7?#'
    }
  ],
  logo: 'Cloud Design',
  topbarOperations: <ToggleTheme />
})

function loadTheme(val: string) {
  document.documentElement.className = val
  mapThemeToImport[val]().then(({ default: cssText }) => {
    window['__recheck_css_var'] = window['__recheck_css_var'] ?? []
    window['__recheck_css_var'].forEach(
      check => typeof check === 'function' && check()
    )
  })
}
