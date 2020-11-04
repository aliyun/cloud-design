import { MenuButton as NextMenuButton } from '@alifd/next'
import hoistNonReactStatics from 'hoist-non-react-statics'
import HOC from '../utils/popupHoc'

// type NextMenuButtonProps = React.ComponentProps<typeof NextMenuButton>

// let MenuButton: typeof NextMenuButton = ((props: NextMenuButtonProps) => {
//   return <NextMenuButton autoWidth={false} {...props} />
// }) as any

let MenuButton: typeof NextMenuButton;
MenuButton = HOC(MenuButton) as any

hoistNonReactStatics(MenuButton, NextMenuButton)

export default MenuButton
