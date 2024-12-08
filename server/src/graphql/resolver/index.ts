import loginUserResolver from "../../resolves/auth/loginResolver";
import registerResolver from "../../resolves/auth/registerResolver";
import marksResolvers from "../../resolves/markResolve";
import studentResolvers from "../../resolves/studentResolve";
import teacherResolvers from "../../resolves/teacherResolvers";

const resolvers = {
  Query: {
    ...studentResolvers.Query,
    ...teacherResolvers.Query,
    ...marksResolvers.Query,
    ...registerResolver.Query,
    ...loginUserResolver.Query,
    
  },
  Mutation: {
    ...studentResolvers.Mutation,
    ...teacherResolvers.Mutation,
    ...marksResolvers.Mutation,
    ...registerResolver.Mutation,
    ...loginUserResolver.Mutation,
  },
};

export default resolvers;
