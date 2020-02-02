import React from 'react'
import { render } from '@testing-library/react'
import Heading from './Heading'

it('renders without crashing', () => {
  render(
    <Heading>
      Lorem Ipsum
    </Heading>
  )
})
