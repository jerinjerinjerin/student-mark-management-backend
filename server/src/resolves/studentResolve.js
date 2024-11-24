"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = require("../service/studentService");
const studentResolvers = {
    Query: {
        // Fetch a student by ID
        getStudent: async (_, { id }) => {
            return await (0, studentService_1.getStudentWithMarks)(id); // Ensure this function aligns with Student type
        },
        // Fetch marks for a student by ID
        getMarksForStudent: async (_, { studentId }) => {
            return await (0, studentService_1.getStudentWithMarks)(studentId); // Adjust resolver to return marks if needed
        },
    },
    Mutation: {
        // Create a new student
        createStudent: async (_, { email, phoneno, standed, teacherId, }) => {
            return await (0, studentService_1.createStudent)(email, phoneno, standed, teacherId); // Ensure service supports teacherId
        },
    },
};
exports.default = studentResolvers;
