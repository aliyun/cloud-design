  import { Notification as NextNotification } from '@alifd/next'

  // 调整默认 offset 值
  const theme = window.getComputedStyle?.(window.document.body).getPropertyValue('--alicloudfe-components-theme').trim();
  if (
    theme === 'yunxiao' ||
    theme === 'yunxiao-dark' ||
    theme === 'hybridcloud' ||
    theme === 'hybridcloud-dark'
  ) {
    NextNotification.config({
      offset: [24, 16]
    })
  }
  export default NextNotification;
    
  