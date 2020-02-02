import React, { useState, useMemo, useEffect } from 'react'
import * as dateFns from 'date-fns'
import Icon from '../Icon'
import { generateDays } from './utils'
import {
  Container,
  Header,
  HeaderButton,
  HeaderInfo,
  Weekdays,
  Weekday,
  Grid,
  Cell,
  CellDay
} from './styles'

export default function Calendar (props: CalendarProps) {
  const { value, onChange } = props

  const [ displayDate, setDisplayDate ] = useState(
    () => value || new Date(),
  )

  useEffect(() => {
    if (value && !dateFns.isSameMonth(displayDate, value)) {
      setDisplayDate(value)
    }
  }, [value])

  const days = useMemo(
    () => (generateDays(displayDate)),
    [displayDate]
  )

  return (
    <Container>
      <Header>
        <HeaderButton
          type='button'
          title='Previous month'
          onClick={() => setDisplayDate(dateFns.addMonths(displayDate, -1))}
        >
          <Icon icon='chevron-left' />
        </HeaderButton>
        <HeaderInfo>
          {dateFns.format(displayDate, `MMMM '/' yyyy`)}
        </HeaderInfo>
        <HeaderButton
          type='button'
          title='Next month'
          onClick={() => setDisplayDate(dateFns.addMonths(displayDate, 1))}
        >
          <Icon icon='chevron-right' />
        </HeaderButton>
      </Header>
      <Weekdays>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Sex', 'Sat'].map(weekday => (
          <Weekday key={weekday}>
            {weekday}
          </Weekday>
        ))}
      </Weekdays>
      <Grid>
        {days.map(day => {
          return (
            <Cell key={day.date.toString()}>
              <CellDay
                data-cell-day
                type='button'
                title={dateFns.isToday(day.date) ? 'Today' : dateFns.format(day.date, 'dd/MM')}
                isAdjacentMonth={day.isAdjacentMonth}
                isToday={day.isToday}
                isSelected={!!(value && dateFns.isSameDay(value, day.date))}
                onClick={() => {
                  if (!(value && dateFns.isSameDay(day.date, value))) {
                    onChange(day.date)
                  }
                }}
              >
                {dateFns.format(day.date, 'dd')}
              </CellDay>
            </Cell>
          )
        })}
      </Grid>
    </Container>
  )
}

export interface CalendarProps {
  value?: Date
  onChange(value: Date): void
}

export interface Day {
  date: Date
  isAdjacentMonth: boolean
  isToday: boolean
}
