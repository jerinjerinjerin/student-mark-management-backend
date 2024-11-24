// associations.ts

import Student from "./models/studentModel";
import Teacher from "./models/teacherModel";

const defineAssociations = () => {
  Teacher.hasMany(Student, { foreignKey: 'teacherId' });
  Student.belongsTo(Teacher, { foreignKey: 'teacherId' });
};

export default defineAssociations;
