import { eachDayOfInterval, isSameMonth, isToday } from 'date-fns'
import { generateDays } from './utils'

const createDate = (year: number, month: number, day: number) =>
  new Date(year, month, day, 0, 0, 0, 0)

it('should return an array of days', () => {
  const expected = eachDayOfInterval({
    start: createDate(2020, 0, 26),
    end: createDate(2020, 1, 29)
  }).map(date => ({
    date,
    isAdjacentMonth: !isSameMonth(date, createDate(2020, 1, 1)),
    isToday: isToday(date)
  }))

  const days = generateDays(createDate(2020, 1, 1))

  expect(days).toEqual(expected)
})
