import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-juliobc-hhp0c4xuz-juliobarriosdev.vercel.app/graphql',
  cache: new InMemoryCache()
})
const rootElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
