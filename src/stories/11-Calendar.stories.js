import React from 'react'
import { action } from '@storybook/addon-actions'
import Calendar from '../components/Calendar'

export default {
  title: 'Calendar',
  component: Calendar
}

export const Empty = () =>
  <Calendar
    onChange={action('changed')}
  />
