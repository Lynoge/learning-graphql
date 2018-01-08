import React from 'react'
import './post.css'

const Post = ({ post }) => (
  <section className="post">
    <h1>{post.title}</h1>
    <p>
      <strong>Author: </strong>
      {post.author.username}
    </p>
  </section>
)

export default Post
