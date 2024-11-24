"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marks = exports.Teacher = exports.Student = exports.sequelize = void 0;
const sequelize_1 = __importDefault(require("../db/sequelize"));
exports.sequelize = sequelize_1.default;
const studentModel_1 = __importDefault(require("./studentModel"));
exports.Student = studentModel_1.default;
const teacherModel_1 = __importDefault(require("./teacherModel"));
exports.Teacher = teacherModel_1.default;
const markModel_1 = __importDefault(require("./markModel"));
exports.Marks = markModel_1.default;
// Initialize Associations
teacherModel_1.default.hasMany(studentModel_1.default, { foreignKey: "teacherId" });
studentModel_1.default.belongsTo(teacherModel_1.default, { foreignKey: "teacherId" });
studentModel_1.default.hasMany(markModel_1.default, { foreignKey: "studentId" });
markModel_1.default.belongsTo(studentModel_1.default, { foreignKey: "studentId" });
markModel_1.default.belongsTo(teacherModel_1.default, { foreignKey: "teacherId" });
teacherModel_1.default.hasMany(markModel_1.default, { foreignKey: "teacherId" });
