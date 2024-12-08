import { gql } from 'apollo-server-express';

const loginTypeDefs = gql`
  # User type (doesn't include the password field)
  type User {
    id: Int!
    email: String!
    name: String!
  }

  # LoginResponse includes message, user, and token (user and token can be optional in case of failed login)
  type LoginResponse {
    message: String!
    user: User
    token: String
  }

  # Mutation for logging in a user
  type Mutation {
    loginUser(email: String!, password: String!): LoginResponse!
  }
`;

export default loginTypeDefs;
