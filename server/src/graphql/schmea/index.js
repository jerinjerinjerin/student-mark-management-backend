"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const studentSchema_1 = __importDefault(require("../../schema/studentSchema"));
const teacherSchema_1 = __importDefault(require("../../schema/teacherSchema"));
const markSchema_1 = __importDefault(require("../../schema/markSchema"));
const typeDefs = (0, apollo_server_express_1.gql) `
  # Root Query and Mutation
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
  
  ${studentSchema_1.default}
  ${teacherSchema_1.default}
  ${markSchema_1.default}
`;
exports.default = typeDefs;
