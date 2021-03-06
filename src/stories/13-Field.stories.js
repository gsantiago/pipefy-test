import React from 'react'
import { Form } from 'react-final-form'
import Field from '../components/Field'

export default {
  title: 'Field',
  component: Field
}

export const ShortTextField = () =>
  <Form onSubmit={console.log}>
    {() => (
      <Field
        id='name'
        label='Your name'
        type='ShortTextField'
      />
    )}
  </Form>

export const LongTextField = () =>
  <Form onSubmit={console.log}>
    {() => (
      <Field
        id='bio'
        label='Your bio'
        type='LongTextField'
      />
    )}
  </Form>

export const DateField = () =>
  <Form onSubmit={console.log}>
    {() => (
      <Field
        id='date'
        label='Your birthday'
        type='DateField'
      />
    )}
  </Form>

export const SelectField = () =>
  <Form onSubmit={console.log}>
    {() => (
      <Field
        id='select'
        label='Select some option'
        type='SelectField'
        options={[
          'Option A',
          'Option B',
          'Option C'
        ]}
      />
    )}
  </Form>

export const RadioVerticalField = () =>
  <Form onSubmit={console.log}>
    {() => (
      <Field
        id='select'
        label='Pick an option'
        type='RadioVerticalField'
        options={[
          'Option A',
          'Option B',
          'Option C'
        ]}
      />
    )}
  </Form>

export const ChecklistVerticalField = () =>
  <Form onSubmit={console.log}>
    {() => (
      <Field
        id='select'
        label='Check options'
        type='ChecklistVerticalField'
        options={[
          'Option A',
          'Option B',
          'Option C'
        ]}
      />
    )}
  </Form>
