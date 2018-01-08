import { compose, graphql } from 'react-apollo'
import Home from './component'
import { ADD_AUTHOR, GET_ALL_AUTHORS } from '../../store/queries/authors.js'

export default compose(
  graphql(ADD_AUTHOR, { name: 'addAuthorClient' }),
  graphql(GET_ALL_AUTHORS, { props: ({ data }) => data })
)(Home)
