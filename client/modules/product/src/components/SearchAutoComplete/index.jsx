import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useLazyQuery } from "@apollo/client";
import { useTheme } from "@mui/material/styles";

import { getProductSuggestion } from "../../graphql/query";
import { debounce } from "../../utils";

const SearchAutoComplete = () => {
  const theme = useTheme();
  const [suggestions, setSuggestions] = useState();
  const history = useHistory();
  const [getSuggestion, { loading, data }] = useLazyQuery(getProductSuggestion);

  useEffect(() => {
    if (data?.productSuggestion) {
      setSuggestions(data.productSuggestion);
    }
  }, [data]);

  const getSuggestionList = (value) => {
    getSuggestion({ variables: { hint: value } });
  };

  const optimizedSearch = useCallback(debounce(getSuggestionList), []);
  const handleOnSearch = (string) => {
    optimizedSearch(string);
  };

  const handleOnHover = (result) => {
    console.log("handleOnHover", result);
  };

  const handleOnSelect = ({ name }) => {
    console.log("handleOnSelect", { name });
    history.push(`/shop/product/search/${name}`);
  };

  const handleOnFocus = () => {
    console.log("handleOnFocus");
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("handleOnClear");
    console.log("Cleared");
  };

  return (
    <section role="search">
      <ReactSearchAutocomplete
        items={suggestions}
        maxResults={15}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        placeholder="Search for product"
        onClear={handleOnClear}
        fuseOptions={{ keys: ["name", "description"] }} // Search in the description text as well
        styling={{
          zIndex: 100,
        }}
      />
    </section>
  );
};

export default SearchAutoComplete;
