import React from 'react'

const AuthorsList = ({ authors = [], togglePosts }) => {
  return (
    <div>
      <button onClick={() => togglePosts({ variables: {show: false}})}>Click here</button>
      <ul>{authors.map(({ id, username }) => <li key={id}>{username}</li>)}</ul>
    </div>
  )
}

export default AuthorsList
