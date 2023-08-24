'use client'

import styled, { useTheme } from 'styled-components'
import type { ReactNode } from 'react'
import type { IconType } from './Icon'
import Icon from './Icon'

const ButtonContainer = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray10};
  transition: var(--transition);
  border: 0;
  box-sizing: border-box;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray5};
    color: ${(props) => props.theme.colors.gray11};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.gray7};
    color: ${(props) => props.theme.colors.gray12};
  }
`

type ButtonType = 'primary' | 'secondary' | 'tertiary'

type Props = {
  type?: ButtonType
  onClick?: () => void
  icon?: IconType
  children?: ReactNode
  color?: string
  active?: boolean
}

const Button = ({
  type,
  onClick,
  icon,
  children,
  color,
  active = false,
}: Props) => {
  const theme = useTheme()

  let ButtonComponent: ReactNode
  switch (type) {
    case 'primary':
    case 'secondary':
    case 'tertiary':
    default:
      ButtonComponent = (
        <ButtonContainer
          onClick={onClick}
          theme={theme}
          style={{ color: active ? theme.colors.accentSolid : color }}
        >
          {icon && <Icon type={icon} />}
          {icon && children && <div style={{ width: '8px' }} />}
          {children}
        </ButtonContainer>
      )
  }

  return ButtonComponent
}

export default Button
