import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import {
  getProductsByProductType,
  getProductsByCategory,
  getSearchResults,
} from "../graphql/query";

const useProducts = ({
  category = null,
  productType = null,
  searchTerm = null,
}) => {
  let query, variables, dataType;
  if (productType) {
    query = getProductsByProductType;
    variables = { offset: 0, limit: 20, productType };
    dataType = "productsByProductType";
  } else if (searchTerm) {
    query = getSearchResults;
    variables = { offset: 0, limit: 20, searchTerm };
    dataType = "productSearch";
  } else {
    query = getProductsByCategory;
    variables = { offset: 0, limit: 20, category: category || "all" };
    dataType = "productsByCategory";
  }
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useQuery(query, {
    variables,
  });

  useEffect(() => {
    if (data) {
      setProducts(data[dataType]);
    }
  }, [loading, error]);

  return { loading, products, error };
};

export default useProducts;
