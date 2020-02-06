import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputDatePicker from './InputDatePicker'

it('renders without crashing', () => {
  render(
    <InputDatePicker onChange={jest.fn()} />
  )
})

it('displays the selected date formatted', () => {
  const { container } = render(
    <InputDatePicker
      value='2020-06-10'
      onChange={jest.fn()}
    />
  )

  expect(container.querySelector('input')?.value).toEqual('10/06/2020')
})
