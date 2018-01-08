import React, { Component } from 'react'
import Author from '../../components/Author'
import Post from '../../components/Post'
import './home.css'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { authorUsername: '' }
  }

  handleChangeAuthorUsername = event => {
    this.setState({ authorUsername: event.target.value })
  }

  static defaultProps = {
    authors: [],
    posts: [],
    tags: [],
    highlights: []
  }

  render() {
    const { authors, addAuthorClient, highlights, posts, tags } = this.props

    console.log('highlights')
    console.log(highlights)

    return (
      <div className="container">
        <section className="post-container">
          <h2>Posts</h2>
          <h3>Tags</h3>
          <ul>{tags.map(tag => <li>{tag.name}</li>)}</ul>
          {posts.map(post => <Post post={post} />)}
        </section>

        <section className="author-container">
          <h2>Autores</h2>
          {authors.map(author => <Author author={author} />)}
        </section>
      </div>
    )
  }
}
