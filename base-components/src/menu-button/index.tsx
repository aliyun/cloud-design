import * as React from 'react'
import { MenuButton as NextMenuButton } from '@alifd/next'
import HOC from '../utils/popupHoc'

type NextMenuButtonProps = React.ComponentProps<typeof NextMenuButton>

let MenuButton: typeof NextMenuButton = ((props: NextMenuButtonProps) => {
  return <NextMenuButton autoWidth={false} {...props} />
}) as any

MenuButton = HOC(MenuButton) as any

export default MenuButton
