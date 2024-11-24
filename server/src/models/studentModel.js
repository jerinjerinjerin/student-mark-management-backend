"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../db/sequelize"));
const markModel_1 = __importDefault(require("./markModel"));
class Student extends sequelize_1.Model {
}
// Initialize the Student model
Student.init({
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phoneno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    standed: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    teacherId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "student",
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: "Student",
});
Student.hasMany(markModel_1.default, { foreignKey: "studentId" });
markModel_1.default.belongsTo(Student, { foreignKey: "studentId" });
exports.default = Student;
