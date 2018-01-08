import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import gql from 'graphql-tag'
import uuidv4 from 'uuid/v4'

const defaultState = {
  showPosts: true,
}

const resolvers = {
  Mutation: {
    togglePosts: (_, { show }, { cache }) => {
      const query = gql`
        query {
          showPosts @client
        }
      `
      cache.writeQuery({ query, data: { showPosts: show } })
    },
    addAuthorClient: (_, { username }, { cache }) => {
      const query = gql`
        query {
          authors @client {
            id
            username
          }
        }
      `
      const previous = cache.readQuery({ query })
      const data = {
        authors: [ ...previous.authors, { __typename: 'Author', username: username, id: uuidv4() }]
      }

      cache.writeQuery({ query, data })
    }
  }
}

const cache = new InMemoryCache()

const stateLink = withClientState({
  resolvers,
  cache,
  defaults: defaultState,
})

const store = new ApolloClient({
  link: ApolloLink.from([stateLink, new HttpLink({ uri: 'http://localhost:3001' })]),
  cache
})

export default store
