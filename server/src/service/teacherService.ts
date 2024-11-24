// src/services/teacherService.ts

import Teacher from "../models/teacherModel";

export const getTeacherByIdService = async (teacherId: number) => {
  try {
    const teacher = await Teacher.findByPk(teacherId); // Sequelize method to find teacher by primary key (ID)
    
    if (!teacher) {
      throw new Error('Teacher not found');
    }

    return teacher;
  } catch (error: any) {
    throw new Error('Error fetching teacher: ' + error.message);
  }
};

export const createTeacherService = async (email: string, phoneno: string, standed: string, role: string) => {
  try {
    const teacher = await Teacher.create({ email, phoneno, standed, role });
    return teacher;
  } catch (error: any) {
    throw new Error('Error creating teacher: ' + error.message);
  }
};
