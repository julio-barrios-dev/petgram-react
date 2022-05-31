import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { AppProvider } from './AppProvider'
import { App } from './App'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-juliobc-hhp0c4xuz-juliobarriosdev.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invaid_token') {
      window.sessionStorage.removeIitem('token')
      window.location = '/user'
    }
  })
})

const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <AppProvider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
)
