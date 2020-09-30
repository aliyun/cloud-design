import * as React from 'react'
import StyledBackArrow, { BackArrowIcon } from './styles/BackArrow'

export interface IProps {
  render?: (icon: React.ReactElement) => React.ReactElement
  onClick?: (e: React.SyntheticEvent) => void
}

const BackArrow: React.FC<IProps> = ({ onClick, render }) => {
  const icon = <BackArrowIcon type="wind-arrow-left" onClick={onClick} />
  return (
    <StyledBackArrow>
      {typeof render === 'function' ? render(icon) : icon}
    </StyledBackArrow>
  )
}

export default BackArrow
