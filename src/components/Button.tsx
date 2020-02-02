import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import theme from '../config/theme'

export default function Button (props: ButtonProps) {
  const {
    title,
    submitting,
    disabled
  } = props

  return (
    <Container
      title={title}
      disabled={submitting || disabled}
    >
      {submitting ? (
        <Icon
          icon='spinner'
          spin
          color='#fff'
        />
      ) : title}
    </Container>
  )
}

export interface ButtonProps {
  title: string
  submitting?: boolean
  disabled?: boolean
}

const Container = styled.button`
  display: block;
  padding: 15px 30px;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
  font-weight: 900;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 100px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
    color: #d1d1d1;
  }
`
