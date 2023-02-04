const { mergeResolvers } = require('@graphql-tools/merge')
const productResolver = require('../resolver/products/products.resolver')
const productSuggestionResolver = require('../resolver/productSuggestion/productSuggestion.resolver')

const resolvers = [productResolver, productSuggestionResolver]

module.exports = mergeResolvers(resolvers)
