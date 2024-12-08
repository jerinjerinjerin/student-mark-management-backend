import { Response } from "express";
import { registerUser } from "../../service/auth/registerService";


interface UserInput {
    name: string;
    email: string;
    password: string;
    id?: number;  // id will be generated by the database automatically
  }
const registerResolver = {
    Query:{

    },
    Mutation: {
      registerUser: async (
        _: any,
        args: UserInput,
        context: { res: Response }
      ) => {
        const { name, email, password } = args;
  
        console.log(`registerUser: ${name} ${email} ${password}`);
  
        try {
          const result = await registerUser({
            email,
            password,
            name,
          });
  
          if (!result) {
            throw new Error("Failed to register user");
          }
  
          const { newUser, token } = result;
  
          if (context && context.res) {
            context.res.cookie("authToken", token, {
                httpOnly: true,      // Prevent client-side access
                maxAge: 3600000,     // 1 hour
                sameSite: "lax",     // Or "none" for cross-origin
                secure: false,       // Disable for local development; enable for production (HTTPS)
            });
          }

          console.log('token', token)
          
  
          return {
            user: newUser,
            token,
          };
        } catch (error: any) {
          console.error("Error registering user:", error.message);
          throw new Error(error.message);  // Return the error message to the client
        }
      },
    },
  };

  export default registerResolver;
  