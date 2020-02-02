import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Select from './Select'

it('renders without crashing', () => {
  render(
    <Select
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ]}
    />
  )
})

it('should trigger `onChange` prop', () => {
  const spy = jest.fn()
  const { getByTestId } = render(
    <Select
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ]}
      onChange={spy}
    />
  )

  fireEvent.change(getByTestId('select'))

  expect(spy).toHaveBeenCalled()
})
