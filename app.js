const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./src/schema')

const port = 3001
const app = express()
var cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000' }))

app.use(
  '/',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)

app.listen(port)
