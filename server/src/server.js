var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var schema = require('./schema')
const cors = require('cors')

var app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

var server = app.listen(4000, function () {
  console.log(`Running a GraphQL API server at port ${server.address().port}`)
})
