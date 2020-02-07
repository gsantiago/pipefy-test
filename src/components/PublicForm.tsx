import React from 'react'
import { Form, FormProps } from 'react-final-form'
import Field from './Field'
import { PublicForm as PublicFormI } from '../config/types'
import Section from './Section'
import Button from './Button'

export default function PublicForm (props: PublicFormProps) {
  const {
    publicForm: {
      publicFormSettings: settings,
      formFields: fields
    },
    ...formProps
  } = props

  return (
    <Section title={`${settings.title} - ${settings.organizationName}`}>
      <Form {...formProps}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            {fields.map(field => (
              <Field
                key={field.id}
                type={field.__typename!}
                id={field.id}
                label={field.label}
                options={field.options}
              />
            ))}
            <Button
              title={settings.submitButtonText}
              submitting={submitting}
            />
          </form>
        )}
      </Form>
    </Section>
  )
}

export interface PublicFormProps extends PublicFormI, FormProps {}
