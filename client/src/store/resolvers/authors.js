import uuidv4 from 'uuid/v4'

import { GET_ALL_AUTHORS_CLIENT } from '../queries/authors'

export const addAuthorClient = (_, { username }, { cache }) => {
  const query = GET_ALL_AUTHORS_CLIENT
  const previous = cache.readQuery({ query })
  const data = {
    authors: [...previous.authors, { __typename: 'Author', username, id: uuidv4() }]
  }

  cache.writeQuery({ query, data })
}
