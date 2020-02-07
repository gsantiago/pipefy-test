import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import PublicForm from './PublicForm'
import { FETCH_FORM_DATA } from '../config/queries'
import { PublicForm as PublicFormI } from '../config/types'

export default function App () {
  const { loading, error, data } = useQuery<PublicFormI>(FETCH_FORM_DATA)

  if (loading) return <div>Loading</div>

  if (error) return <div>Error</div>

  if (data && data.publicForm) {
    return (
      <PublicForm
        publicForm={data.publicForm}
        onSubmit={console.log}
      />
    )
  }

  return null
}
