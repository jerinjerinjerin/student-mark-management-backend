"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../db/sequelize"));
class Teacher extends sequelize_1.Model {
}
Teacher.init({
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure unique email addresses
        validate: {
            isEmail: true, // Ensure email format is valid
        },
    },
    phoneno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10, 15], // Ensure phone number length is between 10-15 characters
        },
    },
    standed: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "teacher", // Default role is teacher
        validate: {
            is: /^teacher$/i, // Ensures that the role is always 'teacher'
        },
    },
}, {
    sequelize: sequelize_2.default,
    modelName: "Teacher",
});
exports.default = Teacher;
