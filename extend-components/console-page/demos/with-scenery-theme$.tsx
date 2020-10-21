import React, { useState } from 'react'
import { Radio } from '@alicloudfe/components'
import Page from '@alicloudfe/components-console-page'

enum Theme {
  WHITE = 'white',
  GREY = 'grey',
}

const defaultSceneryTheme = Theme.WHITE

const Example: React.FC<{}> = () => {
  const [theme, changeTheme] = useState(defaultSceneryTheme)

  return (
    <Page sceneryTheme={theme}>
      <Page.Header title="Scenery Theme" />
      <Page.Content>
        <Radio.Group
          value={theme}
          onChange={(newTheme, event) => {
            changeTheme(newTheme as Theme)
          }}
        >
          <Radio value={Theme.WHITE}>{Theme.WHITE}</Radio>
          <Radio value={Theme.GREY}>{Theme.GREY}</Radio>
        </Radio.Group>
      </Page.Content>
    </Page>
  )
}

export default Example
