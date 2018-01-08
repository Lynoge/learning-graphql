import gql from 'graphql-tag'

export const GET_HOME_INFORMATION = gql`
  query {
    highlights {
      id
      title
      author {
        id
        username
      }
    }
    posts {
      id
      title
      author {
        id
        username
      }
    }
    authors {
      id
      username
    }
    tags {
      id
      name
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
