export interface OptionType {
  label: string
  value: string
}

// This should be automatically generated from the graphql schema,
// but I will manually define the interface here
export interface PublicForm {
  publicForm: {
    __typename?: 'PublicForm'
    formFields: FormField[]
    publicFormSettings: {
      __typename?: 'PublicFormSettings'
      organizationName: string
      submitButtonText: string
      title: string
    }
  }
}

export type FormFieldType = 'ShortTextField' |
  'LongTextField' |
  'SelectField' |
  'RadioVerticalField' |
  'ChecklistVerticalField' |
  'DateField'

export interface FormField {
  __typename?: FormFieldType
  id: string
  label: string
  options?: string[]
}
