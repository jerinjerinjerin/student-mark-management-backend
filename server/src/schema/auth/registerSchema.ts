import { gql } from 'apollo-server-express';

const registerTypeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    password: String!
  }

  type RegisterResponse {
    user: User!
    token: String!
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!): RegisterResponse!
  }
`;

export default registerTypeDefs;
