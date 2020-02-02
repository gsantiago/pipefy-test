import React from 'react'
import Select from '../components/Select'

export default {
  title: 'Select',
  component: Select
}

export const Normal = () =>
  <Select
    options={[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]}
  />

export const WithSelectedValue = () =>
  <Select
    value='2'
    options={[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]}
  />