import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query products {
    products {
      _id
      name
      categoryId
      description
      image
      price
    }
  }
`;

export const getProductsByProductType = gql`
  query productsByProductType($productType: String!) {
    productsByProductType(productType: $productType) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const getProductsByCategory = gql`
  query productsByCategory($category: String) {
    productsByCategory(category: $category) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const getProductSuggestion = gql`
  query productSuggestion($hint: String!) {
    productSuggestion(hint: $hint) {
      id
      name
    }
  }
`;

export const getSearchResults = gql`
  query productSearch($searchTerm: String!) {
    productSearch(searchTerm: $searchTerm) {
      _id
      name
      description
      price
      image
    }
  }
`;
