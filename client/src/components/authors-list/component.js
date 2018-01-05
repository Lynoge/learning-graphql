import React from 'react'

const AuthorsList = ({ authors = [] }) => <ul>{authors.map(({ id, username }) => <li key={id}>{username}</li>)}</ul>

export default AuthorsList
