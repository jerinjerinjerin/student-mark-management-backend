"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../db/sequelize"));
class Marks extends sequelize_1.Model {
}
Marks.init({
    studentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Students",
            key: "id",
        },
    },
    teacherId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Teachers",
            key: "id",
        },
    },
    tamil: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    english: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    maths: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    physics: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: "Marks",
});
exports.default = Marks;
