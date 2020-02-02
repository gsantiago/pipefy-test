import React, { useState, useRef, FocusEvent } from 'react'
import styled, { css } from 'styled-components'
import * as dateFns from 'date-fns'
import Input, { InputProps } from './Input'
import Icon from './Icon'
import Calendar from './Calendar'

export default function InputDatePicker (props: InputDatePickerProps) {
  const {
    value,
    onChange,
    onFocus,
    onBlur,
    ...rest
  } = props

  const [ isFocused, setIsFocused ] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <Container
      ref={containerRef}
      onFocus={e => {
        setIsFocused(true)
        if (onFocus) onFocus(e as FocusEvent<HTMLInputElement>)
      }}
      onBlur={e => {
        setIsFocused(false)
        if (onBlur) onBlur(e as FocusEvent<HTMLInputElement>)
      }}
    >
      <Input
        {...rest}
        value={value ? dateFns.format(dateFns.parseISO(value), 'dd/MM/yyyy') : ''}
        onChange={() => null}
        right={<Icon icon='calendar' />}
        rightStyle={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          pointerEvents: 'none'
        }}
      />
      <CalendarWrapper visible={isFocused}>
        <Calendar
          value={value ? dateFns.parseISO(value) : null}
          onChange={date => {
            onChange(dateFns.format(date, 'yyyy-MM-dd'))
            setIsFocused(false)
            if (onBlur) onBlur({} as FocusEvent<HTMLInputElement>)
          }}
        />
      </CalendarWrapper>
    </Container>
  )
}

export interface InputDatePickerProps
  extends Omit<InputProps, 'value' | 'onChange'> {
  value?: string
  onChange(value: string): void
}

const Container = styled.div`
  position: relative;
`

const CalendarWrapper = styled.div<{ visible: boolean }>`
  width: 300px;
  margin-top: 10px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease all, 0s visibility;
  transition-delay: 0.1s;
  position: absolute;
  z-index: 100;

  ${props => props.visible && css`
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  `}
`
