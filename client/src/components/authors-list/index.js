import {
  compose,
  graphql,
} from 'react-apollo'
import Component from './component'
import {
  ADD_AUTHOR,
  GET_ALL_AUTHORS,
} from '../../store/queries/authors.js'
import { TOGGLE_POSTS } from '../../store/queries/posts.js'

const AuthorsList = compose(
  graphql(ADD_AUTHOR, {name: 'addAuthorClient'}),
  graphql(TOGGLE_POSTS, {name: 'togglePosts'}),
  graphql(GET_ALL_AUTHORS, {
    props: ({ data }) => data
  })
)(Component)

export default AuthorsList
