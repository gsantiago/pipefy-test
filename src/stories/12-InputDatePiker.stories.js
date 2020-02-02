import React from 'react'
import { Value } from 'react-values'
import { action } from '@storybook/addon-actions'
import InputDatePicker from '../components/InputDatePicker'

export default {
  title: 'InputDatePicker',
  component: InputDatePicker
}

export const Empty = () =>
  <InputDatePicker
    onChange={action('changed')}
  />

export const WithDate = () =>
  <InputDatePicker
    value='2020-06-10'
    onChange={action('changed')}
  />

export const Stateful = () =>
  <Value>
    {({ set, value }) => (
      <div>
        <InputDatePicker
          value={value}
          onChange={set}
        />
        <pre>value: {JSON.stringify(value)}</pre>
      </div>
    )}
  </Value>
