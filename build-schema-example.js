const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const port = 3000

const schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String
  }
`)

const root = {
  postTitle: () => {
    return 'Building my first GraphQL server'
  },
  blogTitle: () => {
    return 'Rodrigo Boniatti'
  }
}

const app = express()
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port)
console.log('GraphQL server running at locahost: ' + port)
