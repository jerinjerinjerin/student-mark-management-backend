import { gql } from 'apollo-server-express';
import studentTypeDefs from '../../schema/studentSchema';
import teacherTypeDefs from '../../schema/teacherSchema';
import marksTypeDefs from '../../schema/markSchema';
import registerTypeDefs from '../../schema/auth/registerSchema';
import loginTypeDefs from '../../schema/auth/loginSchema';


const typeDefs = gql`
  # Root Query and Mutation
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
  
  ${studentTypeDefs}
  ${teacherTypeDefs}
  ${marksTypeDefs}
  ${registerTypeDefs}
  ${loginTypeDefs}
`;

export default typeDefs;
