import * as React from 'react'
import IntersectionObserver from '@researchgate/react-intersection-observer'
import * as S from './styles'

export interface IProps {
  adjustHeight: number | string
  children?: React.ReactNode
}

export interface IState {
  isIntersecting: boolean
}

const MenuContainer: React.FC<IProps> = ({ adjustHeight, children }) => {
  const [isIntersecting, setIsIntersecting] = React.useState(true)
  const onIntersectionChange = React.useCallback(
    (arg: IntersectionObserverEntry): void => {
      setIsIntersecting(arg.isIntersecting)
    },
    []
  )
  return (
    <>
      <IntersectionObserver onChange={onIntersectionChange}>
        <S.MenuIntersectionGuard />
      </IntersectionObserver>
      <S.MenuIntersectionContainer
        isIntersecting={isIntersecting}
        adjustHeight={adjustHeight}
      >
        {children}
      </S.MenuIntersectionContainer>
    </>
  )
}

export default MenuContainer
