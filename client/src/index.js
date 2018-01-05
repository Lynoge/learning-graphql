import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

// import gql from 'graphql-tag'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3001' }),
  cache: new InMemoryCache()
})

// client
//   .query({
//     query: gql`
//       {
//         authors {
//           username
//         }
//       }
//     `
//   })
//   .then(({ data, loading }) => {
//     if (!loading) {
//       data.authors.map(author => console.log(author.username))
//     } else {
//       console.log('Carregando')
//     }
//   })

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(WrappedApp, document.getElementById('root'))
registerServiceWorker()
