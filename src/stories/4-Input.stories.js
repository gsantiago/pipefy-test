import React from 'react'
import Input from '../components/Input'
import Icon from '../components/Icon'

export default {
  title: 'Input',
  component: Input,
  parameters: {
    notes: 'The input component can be either a `<input />` or a `<textarea />`'
  }
}

export const Empty = () => <Input />

export const WithPlaceholder = () =>
  <Input placeholder='Type something' />

export const WithDefaultValue = () =>
  <Input
    defaultValue='default value'
  />

export const WithLeftAddOn = () =>
  <Input
    left={<Icon icon='user' />}
    defaultValue='John Doe'
  />

export const WithRightAddOn = () =>
  <Input
    right={<Icon icon='calendar' />}
    defaultValue='10-06-1995'
  />

export const AsTextarea = () =>
  <Input as='textarea' />

export const Focused = () =>
  <Input
    defaultValue='This input is focused'
    state='focused'
  />

export const Valid = () =>
  <Input
    defaultValue='This input is valid'
    state='valid'
  />

export const Invalid = () =>
  <Input
    defaultValue='This input is invalid'
    state='invalid'
  />
