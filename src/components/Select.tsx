import React, { useRef, HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'
import InputBorder, { InputBorderProps } from './InputBorder'
import Icon from './Icon'
import theme from '../config/theme'

export default function Select (props: SelectProps) {
  const {
    state,
    options,
    ...rest
  } = props

  const selectRef = useRef<HTMLSelectElement>(null)

  return (
    <InputBorder
      right={(
        <Icon
          icon='angle-down'
        />
      )}
      rightStyle={{
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        pointerEvents: 'none'
      }}
      state={state}
    >
      <SelectEl {...rest}>
        <option value='' />
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </SelectEl>
    </InputBorder>
  )
}

export interface SelectProps
  extends HtmlHTMLAttributes<HTMLSelectElement>,
          Pick<InputBorderProps, 'state'> {
  options: { label: string, value: string }[]
}

const SelectEl = styled.select`
  display: block;
  flex-grow: 1;
  width: 100%;
  appearance: none;
  background-color: transparent;
  border: none;
  height: 40px;
  padding: 0 10px;
  font-family: ${theme.fonts.primary};
  font-size: 16px;
`
