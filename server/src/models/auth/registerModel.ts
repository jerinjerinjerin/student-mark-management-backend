import { Model, DataType, DataTypes } from "sequelize";
import sequelize from "../../db/sequelize";

class Register extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}

Register.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Register",
    tableName: "register",
  }
);

export default Register;
