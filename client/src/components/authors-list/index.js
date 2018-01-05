import React from 'react'
import { graphql } from 'react-apollo'
import Component from './component'
import { GET_ALL_AUTHORS } from '../../store/queries/authors.js'

const AuthorsList = graphql(GET_ALL_AUTHORS)(({ data }) => <Component {...data} />)

export default AuthorsList
