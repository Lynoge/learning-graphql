import React, { Component } from 'react'
import Author from '../../components/Author'
import Post from '../../components/Post'
import Tags from '../../components/Tags'
import Highlights from '../../components/Highlights'
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

    return (
      <div className="container">
        <Highlights highlights={highlights} />

        <section className="post-container">
          <Tags tags={tags} />
          {posts.map(post => <Post post={post} />)}
        </section>

        <section className="author-container">{authors.map(author => <Author author={author} />)}</section>
      </div>
    )
  }
}
