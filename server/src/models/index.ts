import sequelize from "../db/sequelize";
import Student from "./studentModel";
import Teacher from "./teacherModel";
import Marks from "./markModel";

// Initialize Associations
Teacher.hasMany(Student, { foreignKey: "teacherId" });
Student.belongsTo(Teacher, { foreignKey: "teacherId" });

Student.hasMany(Marks, { foreignKey: "studentId" });
Marks.belongsTo(Student, { foreignKey: "studentId" });

Marks.belongsTo(Teacher, { foreignKey: "teacherId" });
Teacher.hasMany(Marks, { foreignKey: "teacherId" });

export { sequelize, Student, Teacher, Marks };
