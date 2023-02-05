export const getGraphqlBaseUri = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/graphql"
    : "https://ycompany-graphql.onrender.com/graphql";
