import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import PublicForm from './PublicForm'
import { FETCH_FORM_DATA, SUBMIT_FORM_DATA } from '../config/queries'
import { PublicForm as PublicFormI } from '../config/types'

export default function App () {
  const query = useQuery<PublicFormI>(FETCH_FORM_DATA)
  const [ submit, { data } ] = useMutation(SUBMIT_FORM_DATA)

  if (query.loading) return <div>Loading</div>

  if (query.error) return <div>Error</div>

  if (query.data && query.data.publicForm) {
    return (
      <PublicForm
        publicForm={query.data.publicForm}
        onSubmit={(data) => submit({
          variables: {
            filledFields: Object.keys(data).map(key => ({ fieldId: key, fieldValue: data[key] }))
          }
        })}
      />
    )
  }

  return null
}
