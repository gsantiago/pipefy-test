import React from 'react'
import * as dateFns from 'date-fns'

export default function Calendar (props: CalendarProps) {
  return (
    <div>
      calendar
    </div>
  )
}

export interface CalendarProps {
  value?: Date
  onChange(value: Date): Date
}

export interface Day {
  date: Date
  isAdjacentMonth: boolean
  isToday: boolean
}

export const generateDays = (displayDate: Date): Day[] => {
  const selectedDate = dateFns.setDate(displayDate, 1)
  const daysInMonth = dateFns.getDaysInMonth(displayDate)
  const weekday = dateFns.getDay(selectedDate)
  const start = dateFns.subDays(selectedDate, weekday)
  const days = Math.ceil((weekday + daysInMonth) / 7) * 7 - 1
  const end = dateFns.addDays(start, days)

  return dateFns.eachDayOfInterval({ start, end }).map(date => ({
    date,
    isToday: dateFns.isToday(date),
    isAdjacentMonth: !dateFns.isSameMonth(displayDate, date)
  }))
}
