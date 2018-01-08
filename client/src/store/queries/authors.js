import gql from 'graphql-tag'

export const GET_ALL_AUTHORS = gql`
  query {
    authors {
      id
      username
    }
  }
`

export const GET_ALL_AUTHORS_CLIENT = gql`
  query {
    authors @client {
      id
      username
    }
  }
`

export const ADD_AUTHOR = gql`
  mutation addAuthorClient($username: String!) {
    addAuthorClient(username: $username) @client {
      authors
    }
  }
`
