import marksResolvers from "../../resolves/markResolve";
import studentResolvers from "../../resolves/studentResolve";
import teacherResolvers from "../../resolves/teacherResolvers";

const resolvers = {
  Query: {
    ...studentResolvers.Query,
    ...teacherResolvers.Query,
    ...marksResolvers.Query,
  },
  Mutation: {
    ...studentResolvers.Mutation,
    ...teacherResolvers.Mutation,
    ...marksResolvers.Mutation,
  },
};

export default resolvers;
