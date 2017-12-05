const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./src/schema')

const port = 3000
const app = express()
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port)
console.log(`GraphQL server running at localhost: ${port}`)
