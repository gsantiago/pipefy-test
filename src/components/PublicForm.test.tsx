import React from 'react'
import { render } from '@testing-library/react'
import PublicFom from './PublicFom'
import PublicForm from './PublicForm'

it('renders without crashing', () => {
  render(
    <PublicForm
      onSubmit={data => console.log(data)}
      publicForm={{
        publicFormSettings: {
          title: 'Public Form Title',
          organizationName: 'Pipefy',
          submitButtonText: 'Submit Button'
        },
        formFields: [
          {
            __typename: 'ShortTextField',
            id: 'name',
            label: 'Your name'
          }
        ]
      }}
    />
  )
})
