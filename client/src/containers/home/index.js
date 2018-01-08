import { compose, graphql } from 'react-apollo'
import Home from './component'
import { ADD_AUTHOR, GET_HOME_INFORMATION } from '../../store/queries/authors.js'

export default compose(
  graphql(ADD_AUTHOR, { name: 'addAuthorClient' }),
  graphql(GET_HOME_INFORMATION, { props: ({ data }) => data })
)(Home)
