module.exports = /* GraphQL */ `
  type Product {
    _id: ID
    name: String!
    categoryId: String!
    description: String
    image: String
    price: String!
  }

  type Query {
    products(limit: Int, offset: Int): [Product]
    productsByCategory(category: String, limit: Int, offset: Int): [Product]
    productsByProductType(
      productType: String
      offset: Int
      limit: Int
    ): [Product]
    productSearch(searchTerm: String!, offset: Int, limit: Int): [Product]
  }

  type Mutation {
    addProduct(
      name: String!
      categoryId: String
      description: String
      price: String
      image: String
    ): Product
    deleteProduct(_id: ID): Product
  }
`
