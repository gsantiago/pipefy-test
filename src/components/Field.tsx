import React from 'react'
import { Field as FinalField } from 'react-final-form'
import FormGroup from './FormGroup'
import Input from './Input'
import InputDatePicker from './InputDatePicker'
import Select from './Select'
import OptionList from './OptionList'
import { FormField, FormFieldType } from '../config/types'

export default function Field (props: FieldProps) {
  const {
    id,
    label,
    options,
    type
  } = props

  const Component = formFields[type]

  return (
    <FinalField
      name={id}
    >
      {({ input, meta }) => (
        <FormGroup
          htmlFor={id}
          label={label}
          error={meta.touched && meta.error ? meta.error : ''}
        >
          <Component
            id={id}
            options={options}
            {...input}
          />
        </FormGroup>
      )}
    </FinalField>
  )
}

export interface FieldProps extends FormField {
  type: FormFieldType
}

const formFields: { [ key in FormFieldType ]: React.FC<any> } = {
  ShortTextField: Input,
  LongTextField: props => <Input as='textarea' {...props} />,
  DateField: InputDatePicker,
  SelectField: ({ options, ...props }) =>
    <Select {...props} options={mapOptions(options)} />,
  CheckListVerticalField: ({ options, value, ...props }) =>
    <OptionList
      {...props}
      type='checkbox'
      options={mapOptions(options)}
      value={value || []}
    />,
  RadioVerticalList: ({ options, value, ...props }) =>
    <OptionList
      {...props}
      type='radio'
      options={mapOptions(options)}
      value={value || []}
    />
}

const mapOptions = (options: string[]) =>
  options.map((o: string) => ({ label: o, value: o }))
