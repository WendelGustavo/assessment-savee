import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    genre: String!
    releaseDate: String!
    rating: Float!
    overview: String!
    posterImage: String!
  }

  type Query {
    movies: [Movie]!
    movie(id: ID!): Movie
    movieByTitle(title: String!): [Movie]
  }
`;
