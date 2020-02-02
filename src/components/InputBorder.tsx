import React from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function InputBorder (props: InputBorderProps) {
  const {
    left,
    right,
    state,
    children
  } = props

  return (
    <Container state={state}>
      {left && (
        <AddOn style={{ paddingLeft: 10 }}>
          {left}
        </AddOn>
      )}
      {children}
      {right && (
        <AddOn style={{ paddingRight: 10 }}>
          {right}
        </AddOn>
      )}
    </Container>
  )
}

export interface InputBorderProps {
  left?: React.ReactChild
  right?: React.ReactChild
  state?: InputState
  children: React.ReactChild
}

const stateColors = {
  none: theme.colors.control,
  focused: theme.colors.primary,
  valid: theme.colors.success,
  invalid: theme.colors.error
}

export type InputState = keyof typeof stateColors

const Container = styled.div<{ state?: InputState }>`
  display: flex;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${props => stateColors[props.state || 'none']};
  border-radius: 3px;
`

const AddOn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
