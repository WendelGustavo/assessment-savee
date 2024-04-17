import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * Apollo client connection.
 */
const clientConnection = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

export default clientConnection;