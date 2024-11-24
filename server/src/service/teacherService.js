"use strict";
// src/services/teacherService.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeacherService = exports.getTeacherByIdService = void 0;
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const getTeacherByIdService = async (teacherId) => {
    try {
        const teacher = await teacherModel_1.default.findByPk(teacherId); // Sequelize method to find teacher by primary key (ID)
        if (!teacher) {
            throw new Error('Teacher not found');
        }
        return teacher;
    }
    catch (error) {
        throw new Error('Error fetching teacher: ' + error.message);
    }
};
exports.getTeacherByIdService = getTeacherByIdService;
const createTeacherService = async (email, phoneno, standed, role) => {
    try {
        const teacher = await teacherModel_1.default.create({ email, phoneno, standed, role });
        return teacher;
    }
    catch (error) {
        throw new Error('Error creating teacher: ' + error.message);
    }
};
exports.createTeacherService = createTeacherService;
