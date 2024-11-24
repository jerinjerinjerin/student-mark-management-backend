import Marks from "../models/markModel";
import Student from "../models/studentModel";
import Teacher from "../models/teacherModel";


export const addMarksForStudent = async (
  studentId: number,
  teacherId: number,
  marks: { tamil?: number; english?: number; maths?: number; physics?: number }
) => {
  try {
    console.log("Checking for existing marks for student ID:", studentId);

    const alreadyHaveMark = await Marks.findOne({
      where: { studentId: studentId },
    });

    if (alreadyHaveMark) {
      console.error("Marks already exist for student ID:", studentId);
      throw new Error("Marks for this student already exist");
    }

    console.log("Fetching teacher with ID:", teacherId);
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher || teacher.role !== "teacher") {
      console.error("Teacher not found or unauthorized:", teacherId);
      throw new Error("Only teachers can add marks");
    }

    console.log("Fetching student with ID:", studentId);
    const student = await Student.findByPk(studentId);
    if (!student) {
      console.error("Student not found:", studentId);
      throw new Error(`Student with ID ${studentId} not found`);
    }

    console.log("Adding marks for student ID:", studentId);
    const newMarks = await Marks.create({
      studentId: student.id,
      teacherId: teacher.id,
      tamil: marks.tamil,
      english: marks.english,
      maths: marks.maths,
      physics: marks.physics,
    });

    console.log("Successfully added marks:", newMarks);
    return newMarks;
  } catch (error: any) {
    console.error("Error adding marks:", error.message);
    throw new Error("Error adding marks: " + error.message);
  }
};



export const getMarksForStudent = async (studentId: number) => {
  try {
    console.log('Fetching marks for student with ID:', studentId);

    // Fetch the student and associated marks
    const student = await Student.findByPk(studentId, {
      include: {
        model: Marks,
        attributes: ["id", "tamil", "english", "maths", "physics", "teacherId"],
      },
    });

    // Check if the student exists
    if (!student) {
      throw new Error("Student not found");
    }

    console.log('Student:', student);

    // Extract and return the marks
    return student.Marks; // Access the `Marks` association
  } catch (error: any) {
    console.error("Error fetching marks:", error.message);
    throw new Error("Error fetching marks: " + error.message);
  }
};


export const updateMarksForStudent = async (
  studentId: number,
  teacherId: number,
  marks: { tamil?: number; english?: number; maths?: number; physics?: number }
) => {
  try {
    // Verify teacher role
    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher || teacher.role !== "teacher") {
      throw new Error("Only teachers can update marks");
    }

    // Check if the student exists
    const student = await Student.findByPk(studentId);
    if (!student) {
      throw new Error("Student not found");
    }

    // Find existing marks
    const existingMarks = await Marks.findOne({
      where: { studentId: studentId, teacherId: teacherId }, // Ensure both fields are included
    });

    if (!existingMarks) {
      throw new Error("Marks for this student do not exist");
    }

    // Update marks
    await Marks.update(
      {
        tamil: marks.tamil ?? existingMarks.tamil,
        english: marks.english ?? existingMarks.english,
        maths: marks.maths ?? existingMarks.maths,
        physics: marks.physics ?? existingMarks.physics,
      },
      {
        where: {
          studentId: studentId,
          teacherId: teacherId,
        },
      }
    );

    // Fetch and return the updated marks
    const updatedMarks = await Marks.findOne({
      where: { studentId: studentId, teacherId: teacherId },
    });

    if (!updatedMarks) {
      throw new Error("Error fetching updated marks");
    }

    return updatedMarks;
  } catch (error: any) {
    throw new Error("Error updating marks: " + error.message);
  }
};



export const deleteMarksForStudent = async (studentId: number, teacherId: number) => {
  try {

    const teacher = await Teacher.findByPk(teacherId);

    if(!teacher || teacher.role !== "teacher" ){
      throw new Error ("Only teacher can delete student marks")
    }

    const student =await Student.findByPk(studentId);

    if(!student){
      throw new Error ("Student not found")
    }

     // Find existing marks for the student and teacher
     const existingMarks = await Marks.findOne({
      where: { studentId: studentId, teacherId: teacherId },
    });

    if (!existingMarks) {
      throw new Error("Marks for this student do not exist");
    }

    const deletedMarks = await Marks.destroy({
      where: {
        studentId: studentId,
        teacherId: teacherId,
      }
    })

    return `Marks for student ID ${studentId} deleted successfully.`;
    
  } catch (error:any) {
     throw new Error("Error updating marks:" + error.message)
  }
}
