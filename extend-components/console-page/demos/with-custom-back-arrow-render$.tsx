import React from 'react'
import Page from '@alicloudfe/components-console-page'

const Example: React.FC<{}> = () => (
  <Page>
    <Page.Header
      title="Rendering Back-Arrow as a link"
      hasBackArrow
      renderBackArrow={elem => <a href="#a">{elem}</a>}
    />
  </Page>
)

export default Example
