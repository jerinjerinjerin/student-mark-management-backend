"use strict";
// src/resolvers/teacherResolvers.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherResolvers = void 0;
const teacherService_1 = require("../service/teacherService");
exports.teacherResolvers = {
    Query: {
        // Resolver for fetching a teacher by ID
        getTeacher: async (_, { id }) => {
            return await (0, teacherService_1.getTeacherByIdService)(id); // Use service function to get teacher by ID
        },
    },
    Mutation: {
        // Resolver for creating a new teacher
        createTeacher: async (_, { input }) => {
            const { email, phoneno, standed, role } = input;
            return await (0, teacherService_1.createTeacherService)(email, phoneno, standed, role); // Use service function to create teacher
        },
    },
};
exports.default = exports.teacherResolvers;
