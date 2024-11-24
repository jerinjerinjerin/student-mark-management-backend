"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markResolve_1 = __importDefault(require("../../resolves/markResolve"));
const studentResolve_1 = __importDefault(require("../../resolves/studentResolve"));
const teacherResolvers_1 = __importDefault(require("../../resolves/teacherResolvers"));
const resolvers = {
    Query: {
        ...studentResolve_1.default.Query,
        ...teacherResolvers_1.default.Query,
        ...markResolve_1.default.Query,
    },
    Mutation: {
        ...studentResolve_1.default.Mutation,
        ...teacherResolvers_1.default.Mutation,
        ...markResolve_1.default.Mutation,
    },
};
exports.default = resolvers;
