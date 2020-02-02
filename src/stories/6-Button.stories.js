import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button
}

export const Normal = () =>
  <Button
    title='Submit Button'
    onClick={action('clicked')}
  />

export const Disabled = () =>
  <Button
    title='Disabled button'
    disabled
  />

export const Submitting = () =>
  <Button
    title='Submitting button'
    submitting
  />
