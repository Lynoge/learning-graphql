import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { authorUsername: '' }
  }

  handleChangeAuthorUsername = event => {
    this.setState({ authorUsername: event.target.value })
  }

  static defaultProps = {
    authors: []
  }

  render() {
    const { authors, addAuthorClient } = this.props

    return (
      <div>
        <input type="text" value={this.state.authorUsername} onChange={this.handleChangeAuthorUsername} />
        <button onClick={() => addAuthorClient({ variables: { username: this.state.authorUsername } })}>
          Add new author
        </button>
        <ul>{authors.map(({ id, username }) => <li key={id}>{username}</li>)}</ul>
      </div>
    )
  }
}
