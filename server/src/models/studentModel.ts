import {
  Model,
  DataTypes,
  HasManyGetAssociationsMixin,
  Association,
} from "sequelize";
import sequelize from "../db/sequelize";
import Marks from "./markModel";

class Student extends Model {
  public id!: number;
  public email!: string;
  public phoneno!: string;
  public standed!: string;
  public role!: string;
  public teacherId!: number;

  // Associations
  public getMarks!: HasManyGetAssociationsMixin<Marks>; // Type-safe method to fetch associated Marks
  public Marks?: Marks[]; // Optional property to access Marks when included in queries

  public static associations: {
    Marks: Association<Student, Marks>;
  };
}

// Initialize the Student model
Student.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "student",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Student",
  }
);

Student.hasMany(Marks, { foreignKey: "studentId" });
Marks.belongsTo(Student, { foreignKey: "studentId" });


export default Student;
