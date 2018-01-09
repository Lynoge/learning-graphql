import React from 'react'
import './tags.css'

const Tags = ({ tags }) => (
  <p className="tags-container">
    Tags:
    {tags.map(tag => <span className="tag">{tag.name}</span>)}
  </p>
)

export default Tags
