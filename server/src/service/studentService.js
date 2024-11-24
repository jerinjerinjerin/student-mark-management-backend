"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = exports.getStudentWithMarks = void 0;
const markModel_1 = __importDefault(require("../models/markModel"));
const studentModel_1 = __importDefault(require("../models/studentModel"));
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const getStudentWithMarks = async (studentId) => {
    try {
        const student = await studentModel_1.default.findByPk(studentId, {
            include: {
                model: markModel_1.default,
            },
        });
        if (!student) {
            throw new Error('Student not found');
        }
        return student;
    }
    catch (error) {
        throw new Error('Error fetching student: ' + error.message);
    }
};
exports.getStudentWithMarks = getStudentWithMarks;
const createStudent = async (email, phoneno, standed, teacherId) => {
    try {
        const teacher = await teacherModel_1.default.findByPk(teacherId);
        if (!teacher) {
            throw new Error('teacher not found');
        }
        // Create a new student in the database
        const student = await studentModel_1.default.create({
            email,
            phoneno,
            standed,
            teacherId,
        });
        return student;
    }
    catch (error) {
        throw new Error("Failed to create student: " + error.message);
    }
};
exports.createStudent = createStudent;
