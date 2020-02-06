import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_FORM_DATA } from '../config/queries'
import { PublicForm } from '../config/types'

export default function App () {
  const { loading, error, data } = useQuery<PublicForm>(FETCH_FORM_DATA)

  if (loading) return <div>Loading</div>

  if (error) return <div>Error</div>

  if (data) {
    console.log(data)
  }

  return null
}
