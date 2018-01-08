import gql from 'graphql-tag'

export const GET_ALL_POSTS_CLIENT = gql`
  query {
    showPosts @client
  }
`
