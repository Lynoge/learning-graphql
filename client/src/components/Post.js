import React from 'react'
import './post.css'

const Post = ({ post }) => (
  <article className="post">
    <h1>{post.title}</h1>
    <p>
      <strong>Author: </strong>
      {post.author.username}
    </p>
  </article>
)

export default Post
