import { Model, DataTypes } from "sequelize";
import sequelize from "../db/sequelize";

class Teacher extends Model {
  public id!: number;
  public email!: string;
  public phoneno!: string;
  public standed!: string;
  public role!: string; // Always 'teacher'
}

Teacher.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure unique email addresses
      validate: {
        isEmail: true, // Ensure email format is valid
      },
    },
    phoneno: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 15], // Ensure phone number length is between 10-15 characters
      },
    },
    standed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "teacher", // Default role is teacher
      validate: {
        is: /^teacher$/i, // Ensures that the role is always 'teacher'
      },
    },
  },
  {
    sequelize,
    modelName: "Teacher",
  }
);

export default Teacher;
