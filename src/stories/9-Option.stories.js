import React from 'react'
import Option from '../components/Option'

export default {
  title: 'Option',
  component: Option
}

export const EmptyCheckbox = () =>
  <Option
    type='checkbox'
    label='Check me'
    onChange={console.log}
  />

export const EmptyRadio = () =>
  <Option
    type='radio'
    label='Check me'
    onChange={console.log}
  />

export const CheckedCheckbox = () =>
  <Option
    type='checkbox'
    label='Already checked'
    onChange={console.log}
    checked
  />

export const CheckedRadio = () =>
  <Option
    type='radio'
    label='Check me'
    checked
    onChange={console.log}
  />
