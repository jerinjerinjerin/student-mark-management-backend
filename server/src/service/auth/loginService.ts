import jwt from 'jsonwebtoken';
import Register from "../../models/auth/registerModel";
import bcrypt from 'bcrypt';

interface User {
  email: string;
  password: string;
}

// Make sure the secret key is correctly sourced from the environment
const secretKey = process.env.JWT_SECRET_KEY || 'jerin';  // Correct the typo here to 'secretKey'

export const loginUser = async (user: User) => {
  try {
    // Find user by email
    const isUser = await Register.findOne({
      where: { email: user.email },
    });

    // If user doesn't exist, throw an error
    if (!isUser) {
      throw new Error("Email not found");
    }

    // Compare provided password with the hashed password stored in the database
    const isMatchPassword = await bcrypt.compare(user.password, isUser.password);

    // If passwords don't match, throw an error
    if (!isMatchPassword) {
      throw new Error("Incorrect password");
    }

    // Generate JWT token with user id as payload
    const token = jwt.sign({ userId: isUser.id }, secretKey, { expiresIn: '1h' });

    // Return user details and token
    return {
      isUser: {
        id: isUser.id,
        name: isUser.name,
        email: isUser.email,  // Return necessary user fields, avoid sending sensitive data like password
      },
      token,
    };

  } catch (error) {
    console.error("Login error:", error);
    throw new Error("An error occurred during login");  // Throw a generic error to avoid exposing sensitive details
  }
};
