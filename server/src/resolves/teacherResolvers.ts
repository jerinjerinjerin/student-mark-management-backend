// src/resolvers/teacherResolvers.ts

import { createTeacherService, getTeacherByIdService } from "../service/teacherService";


export const teacherResolvers = {
  Query: {
    // Resolver for fetching a teacher by ID
    getTeacher: async (_: any, { id }: { id: number }) => {
      return await getTeacherByIdService(id); // Use service function to get teacher by ID
    },
  },

  Mutation: {
    // Resolver for creating a new teacher
    createTeacher: async (_: any, { input }: { input: { email: string, phoneno: string, standed: string, role: string } }) => {
      const { email, phoneno, standed, role } = input;
      return await createTeacherService(email, phoneno, standed, role); // Use service function to create teacher
    },
  },
};

export default teacherResolvers;
