import React, { useState } from 'react'
import Truncate from '@alicloudfe/components-truncate'
import { Input } from '@alicloudfe/components'

const Demo = () => {
  const [text, setText] = useState('')
  return (
    <div className="truncate-demo">
      <p>Truncate by width: </p>
      <Truncate type="width" threshold={100} align="b">
        {text}
      </Truncate>
      <br />
      <p>Truncate by length: </p>
      <Truncate type="length" threshold={10} align="b">
        {text}
      </Truncate>
      <br />
      <p>Truncated text: </p>
      <div>
        <Input value={text} onChange={str => setText(str)} />
      </div>
    </div>
  )
}
export default Demo
