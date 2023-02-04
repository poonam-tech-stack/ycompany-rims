

const { mergeTypeDefs } = require('@graphql-tools/merge')
const productType = require('../types/products/products.type')
const productSuggestionType = require('../types/productSuggestion/productSuggestion.type')
 
const typeDefs =  [productType, productSuggestionType]
 
module.exports = mergeTypeDefs(typeDefs)