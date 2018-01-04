const models = require('../../models')

const {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInputObjectType
} = require('graphql')

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    username: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})

const AuthorInputType = new GraphQLInputObjectType({
  name: 'AuthorInput',
  description: 'Input author payload',
  fields: () => ({
    username: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This represent a post',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    text: {
      type: GraphQLString
    },
    author: {
      type: new GraphQLNonNull(AuthorType),
      resolve: post =>
        models.Author.findOne({
          where: { id: post.authorId },
          raw: true
        }).then(author => author)
    }
  })
})

const PostInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'Input post payload',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    text: {
      type: new GraphQLNonNull(GraphQLString)
    },
    authorId: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})

const QueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all posts',
      resolve: () =>
        models.Post.findAll({
          raw: true
        }).then(posts => posts)
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all authors',
      resolve: () =>
        models.Author.findAll({
          raw: true
        }).then(authors => authors)
    }
  })
})

const MutationRootType = new GraphQLObjectType({
  name: 'BlogAppInput',
  description: 'Blog app input',
  fields: () => ({
    createAuthor: {
      type: AuthorType,
      args: {
        input: {
          type: new GraphQLNonNull(AuthorInputType)
        }
      },
      resolve: async (rootValue, { input }) =>
        models.Author.create({
          username: input.username
        })
    },
    createPost: {
      type: PostType,
      args: {
        input: {
          type: new GraphQLNonNull(PostInputType)
        }
      },
      resolve: async (rootValue, { input }) =>
        models.Post.create({
          title: input.title,
          text: input.text,
          authorId: input.authorId,
          createdAt: new Date(),
          updatedAt: new Date()
        })
    }
  })
})

const BlogAppSchema = new GraphQLSchema({
  query: QueryRootType,
  mutation: MutationRootType
})

module.exports = BlogAppSchema
