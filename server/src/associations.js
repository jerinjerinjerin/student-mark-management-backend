"use strict";
// associations.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentModel_1 = __importDefault(require("./models/studentModel"));
const teacherModel_1 = __importDefault(require("./models/teacherModel"));
const defineAssociations = () => {
    teacherModel_1.default.hasMany(studentModel_1.default, { foreignKey: 'teacherId' });
    studentModel_1.default.belongsTo(teacherModel_1.default, { foreignKey: 'teacherId' });
};
exports.default = defineAssociations;
