import { Button as NextButton } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'

type NextButtonProps = React.ComponentProps<typeof NextButton>

const rxTwoToFourCNChar = /^[\u4e00-\u9fa5]{2,4}$/
const isTwoToFourCNChar = rxTwoToFourCNChar.test.bind(rxTwoToFourCNChar)

const Button: React.FC<NextButtonProps> = props => {
  const children = props.children
  if (typeof children === 'string' && isTwoToFourCNChar(children)) {
    return (
      <NextButton className="isTwoToFourCNCharBtn" {...props}>
        {children}
      </NextButton>
    )
  }
  return <NextButton {...props}>{children}</NextButton>
}

hoistNonReactStatics(Button, NextButton)

const exported: typeof NextButton = Button as any

export default exported

