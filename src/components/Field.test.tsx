import React from 'react'
import { render } from '@testing-library/react'
import { Form } from 'react-final-form'
import Field from './Field'

it('renders without crashing', () => {
  render(
    <Form onSubmit={jest.fn()}>
      {() => (
        <Field
          id='field'
          label='Field label'
          type='ShortTextField'
        />
      )}
    </Form>
  )
})
