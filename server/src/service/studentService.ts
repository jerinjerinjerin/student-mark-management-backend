import Marks from "../models/markModel";
import Student from "../models/studentModel";
import Teacher from "../models/teacherModel";

export const getStudentWithMarks = async (studentId: number) => {
  try {
    const student = await Student.findByPk(studentId, {
      include: {
        model: Marks,
      },
    });

    if (!student) {
      throw new Error('Student not found');
    }

    return student;
  } catch (error:any) {
    throw new Error('Error fetching student: ' + error.message);
  }
};


export const createStudent = async (
  email: string,
  phoneno: string,
  standed: string,
  teacherId: number
) => {
  try {

    const teacher = await Teacher.findByPk(teacherId);

    if(!teacher){
       throw new Error('teacher not found');
    }
    // Create a new student in the database
    const student = await Student.create({
      email,
      phoneno,
      standed,
      teacherId,
    });
    
    return student;
  } catch (error: any) {
    throw new Error("Failed to create student: " + error.message);
  }
};

