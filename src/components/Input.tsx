import React, { HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'
import theme from '../config/theme'

export default function Input (props: InputProps) {
  const {
    left,
    right,
    state,
    ...rest
  } = props

  return (
    <Container state={state}>
      {left && (
        <AddOn style={{ paddingLeft: 10 }}>
          {left}
        </AddOn>
      )}
      <InputEl {...rest} />
      {right && (
        <AddOn style={{ paddingRight: 10 }}>
          {right}
        </AddOn>
      )}
    </Container>
  )
}

const stateColors = {
  none: theme.colors.control,
  focused: theme.colors.primary,
  valid: theme.colors.success,
  invalid: theme.colors.error
}

export type InputState = keyof typeof stateColors

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  left?: React.ReactChild
  right?: React.ReactChild
  as?: 'input' | 'textarea'
  state?: InputState
}

const Container = styled.div<{ state?: InputState }>`
  display: flex;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${props => stateColors[props.state || 'none']};
  border-radius: 3px;
`

const InputEl = styled.input`
  display: block;
  width: 100%;
  flex-grow: 1;
  border: none;
  border-radius: inherit;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  padding: 8px;
  background-color: transparent;

  &[disabled] {
    cursor: not-allowed;
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const AddOn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`
