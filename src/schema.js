const Authors = require('./data/authors')
const Posts = require('./data/posts')
const _ = require('lodash')

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema
} = require('graphql')

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    twitterHandle: {type: GraphQLString}
  })
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This represent a post',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve: (post) => _.find(Authors, a => a.id === post.author_id)
    }
  })
})

const BlogQueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all authors',
      resolve: () => Authors
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all posts',
      resolve: () => Posts
    }
  })
})

const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType
})

module.exports = BlogAppSchema
