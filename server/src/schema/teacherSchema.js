"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const teacherTypeDefs = (0, apollo_server_express_1.gql) `
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
exports.default = teacherTypeDefs;
