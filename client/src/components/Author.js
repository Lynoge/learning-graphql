import React from 'react'
import './author.css'

const Author = ({ author }) => (
  <div className="author">
    <img
      className="author__image"
      src="https://media.simplecast.com/episode/image/72582/thumb_1497159762-artwork.jpg"
      width="80"
      height="80"
    />
    <span className="author__name">{author.username}</span>
  </div>
)

export default Author
