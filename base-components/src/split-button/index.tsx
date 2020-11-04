import { SplitButton as NextSplitButton } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import HOC from '../utils/popupHoc'

let SplitButton: typeof NextSplitButton
SplitButton = HOC(SplitButton) as any

hoistNonReactStatics(SplitButton, NextSplitButton)

export default SplitButton
