import React from 'react'
import Button from '../components/Button'

export default {
  title: 'Button',
  component: Button
}

export const Normal = () =>
  <Button
    title='Submit Button'
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
