import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import App from './components/App'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: require('./fragmentTypes.json')
})

const client = new ApolloClient({
  uri: 'https://app.pipefy.com/public_api',
  cache: new InMemoryCache({ fragmentMatcher })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
)
