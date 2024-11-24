"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMarksForStudent = exports.updateMarksForStudent = exports.getMarksForStudent = exports.addMarksForStudent = void 0;
const markModel_1 = __importDefault(require("../models/markModel"));
const studentModel_1 = __importDefault(require("../models/studentModel"));
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const addMarksForStudent = async (studentId, teacherId, marks) => {
    try {
        console.log("Checking for existing marks for student ID:", studentId);
        const alreadyHaveMark = await markModel_1.default.findOne({
            where: { studentId: studentId },
        });
        if (alreadyHaveMark) {
            console.error("Marks already exist for student ID:", studentId);
            throw new Error("Marks for this student already exist");
        }
        console.log("Fetching teacher with ID:", teacherId);
        const teacher = await teacherModel_1.default.findByPk(teacherId);
        if (!teacher || teacher.role !== "teacher") {
            console.error("Teacher not found or unauthorized:", teacherId);
            throw new Error("Only teachers can add marks");
        }
        console.log("Fetching student with ID:", studentId);
        const student = await studentModel_1.default.findByPk(studentId);
        if (!student) {
            console.error("Student not found:", studentId);
            throw new Error(`Student with ID ${studentId} not found`);
        }
        console.log("Adding marks for student ID:", studentId);
        const newMarks = await markModel_1.default.create({
            studentId: student.id,
            teacherId: teacher.id,
            tamil: marks.tamil,
            english: marks.english,
            maths: marks.maths,
            physics: marks.physics,
        });
        console.log("Successfully added marks:", newMarks);
        return newMarks;
    }
    catch (error) {
        console.error("Error adding marks:", error.message);
        throw new Error("Error adding marks: " + error.message);
    }
};
exports.addMarksForStudent = addMarksForStudent;
const getMarksForStudent = async (studentId) => {
    try {
        console.log('Fetching marks for student with ID:', studentId);
        // Fetch the student and associated marks
        const student = await studentModel_1.default.findByPk(studentId, {
            include: {
                model: markModel_1.default,
                attributes: ["id", "tamil", "english", "maths", "physics", "teacherId"],
            },
        });
        // Check if the student exists
        if (!student) {
            throw new Error("Student not found");
        }
        console.log('Student:', student);
        // Extract and return the marks
        return student.Marks; // Access the `Marks` association
    }
    catch (error) {
        console.error("Error fetching marks:", error.message);
        throw new Error("Error fetching marks: " + error.message);
    }
};
exports.getMarksForStudent = getMarksForStudent;
const updateMarksForStudent = async (studentId, teacherId, marks) => {
    try {
        // Verify teacher role
        const teacher = await teacherModel_1.default.findByPk(teacherId);
        if (!teacher || teacher.role !== "teacher") {
            throw new Error("Only teachers can update marks");
        }
        // Check if the student exists
        const student = await studentModel_1.default.findByPk(studentId);
        if (!student) {
            throw new Error("Student not found");
        }
        // Find existing marks
        const existingMarks = await markModel_1.default.findOne({
            where: { studentId: studentId, teacherId: teacherId }, // Ensure both fields are included
        });
        if (!existingMarks) {
            throw new Error("Marks for this student do not exist");
        }
        // Update marks
        await markModel_1.default.update({
            tamil: marks.tamil ?? existingMarks.tamil,
            english: marks.english ?? existingMarks.english,
            maths: marks.maths ?? existingMarks.maths,
            physics: marks.physics ?? existingMarks.physics,
        }, {
            where: {
                studentId: studentId,
                teacherId: teacherId,
            },
        });
        // Fetch and return the updated marks
        const updatedMarks = await markModel_1.default.findOne({
            where: { studentId: studentId, teacherId: teacherId },
        });
        if (!updatedMarks) {
            throw new Error("Error fetching updated marks");
        }
        return updatedMarks;
    }
    catch (error) {
        throw new Error("Error updating marks: " + error.message);
    }
};
exports.updateMarksForStudent = updateMarksForStudent;
const deleteMarksForStudent = async (studentId, teacherId) => {
    try {
        const teacher = await teacherModel_1.default.findByPk(teacherId);
        if (!teacher || teacher.role !== "teacher") {
            throw new Error("Only teacher can delete student marks");
        }
        const student = await studentModel_1.default.findByPk(studentId);
        if (!student) {
            throw new Error("Student not found");
        }
        // Find existing marks for the student and teacher
        const existingMarks = await markModel_1.default.findOne({
            where: { studentId: studentId, teacherId: teacherId },
        });
        if (!existingMarks) {
            throw new Error("Marks for this student do not exist");
        }
        const deletedMarks = await markModel_1.default.destroy({
            where: {
                studentId: studentId,
                teacherId: teacherId,
            }
        });
        return `Marks for student ID ${studentId} deleted successfully.`;
    }
    catch (error) {
        throw new Error("Error updating marks:" + error.message);
    }
};
exports.deleteMarksForStudent = deleteMarksForStudent;
