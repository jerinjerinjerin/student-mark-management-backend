"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marksService_1 = require("../service/marksService");
const marksResolvers = {
    Query: {
        getMarksForStudent: async (_, { studentId }) => {
            try {
                const marks = await (0, marksService_1.getMarksForStudent)(studentId);
                return marks; // Directly return the array of marks
            }
            catch (error) {
                console.error("Error fetching marks for student:", error);
                throw new Error("Failed to fetch marks for student.");
            }
        },
    },
    Mutation: {
        addMarksForStudent: async (_, args) => {
            try {
                const { studentId, teacherId, marks } = args;
                console.log("Input Arguments:", { studentId, teacherId, marks });
                const result = await (0, marksService_1.addMarksForStudent)(studentId, teacherId, marks);
                return result;
            }
            catch (error) {
                console.error("Error in addMarksForStudent resolver:", error.message);
                throw new Error("Failed to add marks for student.");
            }
        },
        updateMarksForStudent: async (_, { studentId, teacherId, marks, }) => {
            try {
                const updatedMarks = await (0, marksService_1.updateMarksForStudent)(studentId, teacherId, marks);
                return updatedMarks;
            }
            catch (error) {
                console.error("Error updating marks for student:", error);
                throw new Error("Failed to update marks for student.");
            }
        },
        deleteMarksForStudent: async (_, { studentId, teacherId }) => {
            try {
                const result = await (0, marksService_1.deleteMarksForStudent)(studentId, teacherId);
                return result;
            }
            catch (error) {
                console.error('Error deleting marks:', error);
                throw new Error('Failed to delete marks.');
            }
        }
    },
};
exports.default = marksResolvers;
