import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://localhost:4000/learn/",
  cache: new InMemoryCache(),
});

export default client;