import React from 'react'
import FormGroup from '../components/FormGroup'
import Input from '../components/Input'

export default {
  title: 'FormGroup',
  component: FormGroup
}

export const WithInput = () =>
  <FormGroup
    label='This is a label'
    htmlFor='input'
  >
    <Input id='input' />
  </FormGroup>

export const WithErrorMessage = () =>
  <FormGroup
    label='This is a label'
    htmlFor='input'
    error='This is a error message'
  >
    <Input id='input' state='invalid' />
  </FormGroup>

export const FormExample = () =>
  <form>
    <FormGroup
      label='Name'
      htmlFor='name'
    >
      <Input id='name' />
    </FormGroup>
    <FormGroup
      label='Email'
      htmlFor='email'
    >
      <Input
        id='email'
        type='email'
      />
    </FormGroup>
    <FormGroup
      label='Password'
      htmlFor='password'
    >
      <Input
        id='password'
        type='password'
      />
    </FormGroup>
  </form>