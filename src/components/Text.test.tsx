import React from 'react'
import { render } from '@testing-library/react'
import Text from './Text'

it('renders without crashing', () => {
  render(
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid culpa cumque debitis dolores enim expedita fugiat itaque iusto minus nulla obcaecati omnis praesentium, reprehenderit rerum voluptate voluptates voluptatibus.
    </Text>
  )
})
