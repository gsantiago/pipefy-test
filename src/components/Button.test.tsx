import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

it('renders without crashing', () => {
  render(
    <Button
      title='Submit'
      onClick={() => null}
    />
  )

  render(
    <Button
      title='Submit'
      disabled
    />
  )

  render(
    <Button
      title='Submit'
      submitting
      onClick={() => null}
    />
  )
})

it('triggers `onChange` when button is neither disabled or submitting', () => {
  const spy = jest.fn()
  const { getByText } = render(
    <Button
      title='Submit button'
      onClick={spy}
    />
  )

  fireEvent.click(getByText('Submit button'))
  expect(spy).toHaveBeenCalled()
})

it('does not trigger `onChange` when button is either disabled or submitting', () => {
  const spy = jest.fn()
  const { getByText, getByTitle } = render(
    <div>
      <Button
        title='Submitting button'
        submitting
        onClick={spy}
      />
      <Button
        title='Disabled button'
        disabled
        onClick={spy}
      />
    </div>
  )

  fireEvent.click(getByTitle('Submitting button'))
  fireEvent.click(getByText('Disabled button'))
  expect(spy).not.toHaveBeenCalled()
})
