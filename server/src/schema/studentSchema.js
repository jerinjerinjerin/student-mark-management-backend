"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const studentTypeDefs = (0, apollo_server_express_1.gql) `
  type Student {
    id: ID!
    email: String!
    phoneno: String!
    standed: String!
    teacherId: Int! # Foreign key to the teacher
    marks: [Marks] # Associated marks for the student
  }

  extend type Query {
    # Fetch a student by ID
    getStudent(id: ID!): Student

    # Fetch marks associated with a specific student
    getMarksForStudent(studentId: ID!): [Marks]
  }

  extend type Mutation {
    # Create a new student, including their teacherId
    createStudent(
      email: String!
      phoneno: String!
      standed: String!
      teacherId: Int!
    ): Student
  }
`;
exports.default = studentTypeDefs;
