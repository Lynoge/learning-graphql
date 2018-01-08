import React from 'react'
import './author.css'

const Author = ({ author }) => (
  <div className="author">
    <span>{author.username}</span>
  </div>
)

export default Author
