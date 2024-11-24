"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const marksTypeDefs = (0, apollo_server_express_1.gql) `
  type Marks {
    id: ID!
    studentId: Int!
    teacherId: Int!
    tamil: Int
    english: Int
    maths: Int
    physics: Int
  }

  extend type Query {
  getMarksForStudent(studentId: ID!): [Marks!]
}


  extend type Mutation {
    # Add marks for a student
    addMarksForStudent(
      studentId: ID!
      teacherId: ID!
      marks: MarksInput!
    ): Marks
  }

  extend type Mutation {
  updateMarksForStudent(
    studentId: ID!
    teacherId: ID!
    marks: MarksInput!
  ): Marks
}

extend type Mutation {
  deleteMarksForStudent(studentId: ID!, teacherId: ID!): String
}


  input MarksInput {
    tamil: Int
    english: Int
    maths: Int
    physics: Int
  }
`;
exports.default = marksTypeDefs;
