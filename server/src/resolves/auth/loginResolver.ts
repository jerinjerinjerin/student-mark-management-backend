import { Response } from "express";
import { loginUser } from "../../service/auth/loginService";
import Register from "../../models/auth/registerModel";

interface UserInput {
  email: string;
  password: string;
}

// Define a consistent return type
interface LoginResponse {
  message: string;
  user?: {  // Return only necessary fields from the user
    id: number;
    name: string;
    email: string;
  };
  token?: string;
}

const loginUserResolver = {
  Query: {},
  Mutation: {
    loginUser: async (
      _: any, 
      args: UserInput, 
      context: { res: Response }
    ): Promise<LoginResponse> => {
      const { email, password } = args;

      console.log("Attempting to login user:", email, password);

      try {
        const result = await loginUser(args);  // Call the login service function

        // If no user is found or password doesn't match, return failure message
        if (!result || !result.token || !result.isUser) {
          return { message: "Login failed: Invalid credentials" };  // return only message for failure
        }

        const { token, isUser } = result;

        // Set the auth token in cookies
        if (context && context.res) {
          context.res.cookie("authToken", token, {
            httpOnly: true,      // Prevent client-side access
            maxAge: 3600000,     // 1 hour
            sameSite: "lax",     // Or "none" for cross-origin
            secure: process.env.NODE_ENV === "production", // Use 'true' in production
          });
        }

        // Return a custom object with only necessary user fields
        return {
          message: "Login success",
          user: {
            id: isUser.id,
            name: isUser.name,
            email: isUser.email,
          },
          token: token,
        };

      } catch (error) {
        console.error("Error during login:", error);
        return { message: "Internal server error" }; // Return a generic error message
      }
    },
  },
};

export default loginUserResolver;
