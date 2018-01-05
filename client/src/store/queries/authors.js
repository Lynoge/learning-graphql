import gql from 'graphql-tag'

export const GET_ALL_AUTHORS = gql`
  query {
    authors {
      id
      username
    }
  }
`
