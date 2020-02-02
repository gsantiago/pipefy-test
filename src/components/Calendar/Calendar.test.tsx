import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import * as dateFns from 'date-fns'
import Calendar from './Calendar'

it('renders without crashing', () => {
  render(
    <Calendar
      onChange={() => null}
    />
  )

  render(
    <Calendar
      value={new Date()}
      onChange={() => null}
    />
  )
})

it('renders all days of the current month', () => {
  const { container } = render(
    <Calendar
      onChange={() => null}
    />
  )

  const days = Array.from(container.querySelectorAll('[data-cell-day]'))

  dateFns.eachDayOfInterval({
    start: dateFns.setDate(new Date(), 1),
    end: dateFns.setDate(new Date(), dateFns.getDaysInMonth(new Date()))
  }).forEach(day => {
    expect(!!days.find(node => (
      [dateFns.format(day, 'dd/MM'), 'Today'].includes(
        node.getAttribute('title') || ''
      ))
    )).toBeTruthy()
  })
})

it('triggers `onChange` with the selected date', () => {
  const spy = jest.fn()
  const { getByTitle } = render(
    <Calendar
      value={new Date(2020, 5, 1, 0, 0, 0, 0)}
      onChange={spy}
    />
  )

  fireEvent.click(getByTitle('10/06'))
  expect(spy).toHaveBeenCalledWith(new Date(2020, 5, 10, 0, 0, 0, 0))
})
