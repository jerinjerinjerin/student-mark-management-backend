import { createStudent, getStudentWithMarks } from "../service/studentService";

const studentResolvers = {
  Query: {
    // Fetch a student by ID
    getStudent: async (_: any, { id }: { id: number }) => {
      return await getStudentWithMarks(id); // Ensure this function aligns with Student type
    },

    // Fetch marks for a student by ID
    getMarksForStudent: async (_: any, { studentId }: { studentId: number }) => {
      return await getStudentWithMarks(studentId); // Adjust resolver to return marks if needed
    },
  },

  Mutation: {
    // Create a new student
    createStudent: async (
      _: any,
      {
        email,
        phoneno,
        standed,
        teacherId,
      }: { email: string; phoneno: string; standed: string; teacherId: number }
    ) => {
      return await createStudent(email, phoneno, standed, teacherId); // Ensure service supports teacherId
    },
  },
};

export default studentResolvers;
