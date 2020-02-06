import React from 'react'
import { render } from '@testing-library/react'
import InputBorder from './InputBorder'

it('renders without crashing', () => {
  render(
    <InputBorder>
      <input />
    </InputBorder>
  )
})
