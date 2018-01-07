import gql from 'graphql-tag'

export const TOGGLE_POSTS = gql`
  mutation togglePosts($show: String!) {
    togglePosts(show: $show) @client {
      showPosts
    }
  }
`

export const GET_POSTS_VISIBILITY = gql`
  query {
    showPosts @client
  }
`
