const productsData = require('../../data/product.json')

module.exports = {
  Query: {
    productSuggestion: (parent, args) => {
      const hint = args.hint.toLowerCase()
      var sId = 1

      let isProductTypeAdded = false
      let isProductCategoryAdded = false

      const checkTags = ({ tags, hint }) => {
        return tags.filter((tag) => {
          if (tag.toLowerCase().includes(hint)) {
            return tag
          }
        })
      }
      return productsData?.products.reduce(
        (suggestion, { name, productType, tags, category }) => {
          const buildingSuggestion = []
          const matchedTag = checkTags({ tags, hint })
          matchedTag.forEach((tag) => {
            buildingSuggestion.push({ id: sId, name: tag })
            sId++
          })

          if (name.toLowerCase().includes(hint)) {
            buildingSuggestion.push({ id: sId, name })
            sId++
          }

          if (productType.toLowerCase().includes(hint) && !isProductTypeAdded) {
            isProductTypeAdded = true
            buildingSuggestion.push({ id: sId, name: productType })
            sId++
          }
          if (
            category.toLowerCase().includes(hint) &&
            !isProductCategoryAdded
          ) {
            isProductCategoryAdded = true
            buildingSuggestion.push({ id: sId, name: category })
            sId++
          }

          return [...suggestion, ...buildingSuggestion]
        },
        [],
      )
    },
  },
}
