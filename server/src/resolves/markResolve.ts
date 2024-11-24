import {
  addMarksForStudent,
  deleteMarksForStudent,
  getMarksForStudent,
  updateMarksForStudent,
} from "../service/marksService";

const marksResolvers = {
  Query: {
    getMarksForStudent: async (
      _: any,
      { studentId }: { studentId: number }
    ) => {
      try {
        const marks = await getMarksForStudent(studentId);
        return marks; // Directly return the array of marks
      } catch (error) {
        console.error("Error fetching marks for student:", error);
        throw new Error("Failed to fetch marks for student.");
      }
    },
  },
  
  Mutation: {
    addMarksForStudent: async (
      _: any,
      args: { studentId: number; teacherId: number; marks: { tamil?: number; english?: number; maths?: number; physics?: number } }
    ) => {
      try {
        const { studentId, teacherId, marks } = args;
        console.log("Input Arguments:", { studentId, teacherId, marks });
        
        const result = await addMarksForStudent(studentId, teacherId, marks);
        return result;
      } catch (error: any) {
        console.error("Error in addMarksForStudent resolver:", error.message);
        throw new Error("Failed to add marks for student.");
      }
    },
  

    updateMarksForStudent: async (
      _: any,
      {
        studentId,
        teacherId,
        marks,
      }: {
        studentId: number;
        teacherId: number;
        marks: {
          tamil?: number;
          english?: number;
          maths?: number;
          physics?: number;
        };
      }
    ) => {
      try {
        const updatedMarks = await updateMarksForStudent(
          studentId,
          teacherId,
          marks
        );
        return updatedMarks;
      } catch (error) {
        console.error("Error updating marks for student:", error);
        throw new Error("Failed to update marks for student.");
      }
    },

    deleteMarksForStudent: async(
      _: any,
      {studentId, teacherId}: {studentId: number; teacherId: number}
    ) => {
      try {
          const result = await deleteMarksForStudent(studentId, teacherId);
          return result;
      } catch (error) {
        console.error('Error deleting marks:', error);
        throw new Error('Failed to delete marks.');
      }
    }
  },
};

export default marksResolvers;
