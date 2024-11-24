'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add a new column `teacherId` to the `Students` table, making it a foreign key
     */
    await queryInterface.addColumn('Students', 'teacherId', {
      type: Sequelize.INTEGER,
      allowNull: false,  // Ensure this field cannot be null
      references: {
        model: 'Teachers',  // Name of the referenced table (Teachers table)
        key: 'id',          // Column in Teachers table (primary key)
      },
      onDelete: 'CASCADE', // Optional: Delete students if the associated teacher is deleted
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Revert the changes by removing the `teacherId` column if the migration is rolled back
     */
    await queryInterface.removeColumn('Students', 'teacherId');
  }
};
