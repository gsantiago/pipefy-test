import React from 'react'
import { action } from '@storybook/addon-actions'
import { Value } from 'react-values'
import Calendar from '../components/Calendar'

export default {
  title: 'Calendar',
  component: Calendar
}

export const Empty = () =>
  <Calendar
    onChange={action('changed')}
  />

export const WithSelectedDate = () =>
  <Calendar
    value={new Date(2020, 5, 10)}
    onChange={action('changed')}
  />

export const StatefulCalendar = () =>
  <Value>
    {({ set, value }) => (
      <Calendar
        value={value}
        onChange={set}
      />
    )}
  </Value>
