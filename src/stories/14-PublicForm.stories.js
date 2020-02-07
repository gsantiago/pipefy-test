import React from 'react'
import PublicForm from '../components/PublicForm'

export default {
  title: 'PublicForm',
  component: PublicForm
}

export const WithASingleField = () =>
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

export const WithManyFields = () =>
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
        },
        {
          __typename: 'LongTextField',
          id: 'bio',
          label: 'Your bio'
        },
        {
          __typename: 'SelectField',
          id: 'favorite_app',
          label: 'Your favorite app',
          options: ['Youtube', 'Facebook', 'Other']
        },
        {
          __typename: 'RadioVerticalField',
          id: 'region',
          label: 'Your region',
          options: ['North', 'South', 'West', 'Lest']
        },
        {
          __typename: 'ChecklistVerticalField',
          id: 'skills',
          label: 'Your skills',
          options: ['HTML', 'CSS', 'JS', 'PHP', 'Java', 'C++']
        },
        {
          __typename: 'DateField',
          id: 'birthday',
          label: 'Your birthday'
        }
      ]
    }}
  />
