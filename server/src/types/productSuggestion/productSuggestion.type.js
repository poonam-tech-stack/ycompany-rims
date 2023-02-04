module.exports = /* GraphQL */ `
  type ProductSuggestion {
    id: ID
    name: String!
  }

  type Query {
    productSuggestion(
      hint: String
      offset: Int
      limit: Int
    ): [ProductSuggestion]
  }
`
