import React, { HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'
import InputBorder, { InputBorderProps } from './InputBorder'
import theme from '../config/theme'

export default function Input (props: InputProps) {
  const {
    left,
    right,
    state,
    ...rest
  } = props

  return (
    <InputBorder
      left={left}
      right={right}
      state={state}
    >
      <InputEl {...rest} />
    </InputBorder>
  )
}

export interface InputProps
  extends Omit<InputBorderProps, 'children'>,
          HtmlHTMLAttributes<HTMLInputElement> {
  value?: string
}

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
