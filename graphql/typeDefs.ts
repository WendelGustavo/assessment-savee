import { gql } from 'apollo-server';


// Define the schema using the GraphQL schema language
export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    rating: Float
    overview: String!
    posterImage: String!
    countAverage: Int
    genresName: [String]
  }

  type Query {
    movies: [Movie]!
    movie(id: ID!): Movie
    movieByTitle(title: String!): [Movie]
  }
`;
