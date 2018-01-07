import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import gql from 'graphql-tag'

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
