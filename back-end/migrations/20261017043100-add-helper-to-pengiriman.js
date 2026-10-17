'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pengirimans', 'helper', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Helpers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pengirimans', 'helper');
  }
};
