import React from 'react'
import { render } from '@testing-library/react'
import FormGroup from './FormGroup'
import Input from './Input'

it('renders without crashing', () => {
  render(
    <FormGroup
      label='Label'
      htmlFor='id'
    >
      <Input />
    </FormGroup>
  )
})
