import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Icon from './Icon'
import theme from '../config/theme'

export default function Option (props: OptionProps) {
  const {
    type,
    label,
    checked,
    onChange
  } = props

  return (
    <Container
      title={label}
      onClick={() => onChange(!checked)}
    >
      <Check
        type={type}
        checked={checked}
      >
        {checked && (
          <Icon
            icon='check'
            color='#fff'
            style={{ fontSize: 12 }}
          />
        )}
      </Check>
      <Text>{label}</Text>
    </Container>
  )
}

export interface OptionProps {
  type: 'radio' | 'checkbox'
  label: string
  checked?: boolean
  onChange(newValue: boolean): void
}

const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
`

const Check = styled.div<Pick<OptionProps, 'type' | 'checked'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid ${props => theme.colors[props.checked ? 'success' : 'control']};
  border-radius: ${props => ({
    radio: '100%',
    checkbox: '3px'
  })[props.type]};
  margin-right: 10px;
  background-color: ${props => props.checked ? theme.colors.success : 'transparent'};]
`
