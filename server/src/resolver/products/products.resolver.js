const productsData = require("../../data/product.json");

module.exports = {
  Query: {
    productsByProductType: (parent, args) => {
      const productType = args.productType;
      return productsData?.products.filter((product) => product.productType === productType);
    },
    productsByCategory: (parent, args) => {
      const categoryFilter = args.category.toLowerCase();

      if (categoryFilter === "all") {
        return productsData?.products;
      }
      return productsData?.products.filter(({category}) => category === categoryFilter);
    },
    productSearch: (parent, args) => {
      const term = args.searchTerm;
      const checkTags = (tags) => {
        return tags.find((tag) => tag.includes(term));
      };

      return productsData?.products.filter(({name, tags, productType}) => name.includes(term) || productType.includes(term) || checkTags(tags));
    },
  },
};
