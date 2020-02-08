import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'
import theme from './config/theme'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: require('./fragmentTypes.json')
})

const client = new ApolloClient({
  uri: 'https://app.pipefy.com/public_api',
  cache: new InMemoryCache({ fragmentMatcher })
})

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 300px;
  }
`

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
)
