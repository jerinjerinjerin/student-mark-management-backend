import { Model, DataTypes } from "sequelize";
import sequelize from "../db/sequelize";

class Marks extends Model {
  public id!: number;
  public studentId!: number;
  public teacherId!: number;
  public tamil!: number;
  public english!: number;
  public maths!: number;
  public physics!: number;
}

Marks.init(
  {
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Students",
        key: "id",
      },
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Teachers",
        key: "id",
      },
    },
    tamil: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    english: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maths: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    physics: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Marks",
  }
);



export default Marks;
