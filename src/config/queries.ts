import gql from 'graphql-tag'

export const FETCH_FORM_DATA = gql`
  {
    publicForm(formId: "1lf_E0x4") {
      publicFormSettings {
        organizationName
        submitButtonText
        title
      }
  
      formFields {
        ...on ShortTextField {
          id
          label
        }
        ...on LongTextField {
          id
          label
        }
        ...on SelectField {
          id
          label
          options
        }
        ...on RadioVerticalField {
          id
          label
          options
        }
        ...on ChecklistVerticalField {
          id
          label
          options
        }
        ...on DateField {
          id
          label
        }
        __typename
      }
    }
  }
`

export const SUBMIT_FORM_DATA = gql`
  mutation submit ($filledFields: [FilledField]!) {
    submitPublicForm(input: {
      formId: "1lf_E0x4",
        filledFields: $filledFields,
        publicFormSubmitterEmail: "teste@email.com"
      }) {
      repoItem {
        id
        title
      }
    }
  }
`
