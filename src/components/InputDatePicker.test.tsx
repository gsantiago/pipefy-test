import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputDatePicker from './InputDatePicker'

it('renders without crashing', () => {
  render(
    <InputDatePicker onChange={jest.fn()} />
  )
})
