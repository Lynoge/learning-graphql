import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import resolvers from './resolvers'
import defaultStore from './defaultStore'

const cache = new InMemoryCache()

const stateLink = withClientState({
  resolvers,
  cache,
  defaults: defaultStore
})

const store = new ApolloClient({
  link: ApolloLink.from([stateLink, new HttpLink({ uri: 'http://localhost:3001' })]),
  cache
})

export default store
