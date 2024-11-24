import { gql } from 'apollo-server-express';

const teacherTypeDefs = gql`
  type Teacher {
    id: ID!
    email: String!
    phoneno: String!
    standed: String!
    role: String!
  }

  input CreateTeacherInput {
    email: String!
    phoneno: String!
    standed: String!
  }

  extend type Query {
    getTeacher(id: ID!): Teacher
  }

  extend type Mutation {
    createTeacher(input: CreateTeacherInput!): Teacher
  }
`;

export default teacherTypeDefs;
