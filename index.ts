import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
  