import React from 'react'
import Option from './Option'
import { OptionType } from '../config/types'

export default function OptionList (props: OptionListProps) {
  return (
    <div>
      {props.options.map((option, index) => (
        <Option
          key={index}
          type={props.type}
          label={option.label}
          checked={props.type === 'radio' ? (
            props.value === option.value
          ) : (
            props.value.includes(option.value)
          )}
          onChange={checked => {
            if (props.type === 'radio') {
              return props.onChange(checked ? option.value : null)
            }

            if (props.type === 'checkbox') {
              const newValue = checked
                ? props.value.concat(option.value)
                : props.value.filter(o => o !== option.value)

              props.onChange(newValue)
            }
          }}
        />
      ))}
    </div>
  )
}

interface OptionsProps {
  options: OptionType[]
}

interface RadioListProps extends OptionsProps {
  type: 'radio'
  value?: string
  onChange(value: string | null): void
}

interface CheckboxListProps extends OptionsProps {
  type: 'checkbox'
  value: string[]
  onChange(value: string[]): void
}

export type OptionListProps = RadioListProps | CheckboxListProps
