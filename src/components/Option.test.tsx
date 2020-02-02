import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Option from './Option'

it('renders without crashing', () => {
  render(
    <Option
      type='checkbox'
      label='Checkbox label'
      onChange={() => null}
      checked
    />
  )
})

it('triggers `onChange` prop with `true` as argument', () => {
  const spy = jest.fn()
  const label = 'Radio label'
  const { getByText } = render(
    <Option
      type='radio'
      label={label}
      onChange={spy}
      checked={false}
    />
  )

  fireEvent.click(getByText(label))

  expect(spy).toHaveBeenCalledWith(true)
})

it('triggers `onChange` prop with `false` as argument', () => {
  const spy = jest.fn()
  const label = 'Checkbox label'
  const { getByText } = render(
    <Option
      type='checkbox'
      label={label}
      onChange={spy}
      checked={true}
    />
  )

  fireEvent.click(getByText(label))

  expect(spy).toHaveBeenCalledWith(false)
})
