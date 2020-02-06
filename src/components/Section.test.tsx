import React from 'react'
import { render } from '@testing-library/react'
import Section from './Section'

it('renders without crashing', () => {
  render(
    <Section
      title='Section title'
      children={(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorem expedita hic ipsam iusto maxime minima molestiae nam nisi ratione sint sunt suscipit tempore voluptatem, voluptatibus? Beatae natus vel veniam!
        </p>
      )}
    />
  )
})
