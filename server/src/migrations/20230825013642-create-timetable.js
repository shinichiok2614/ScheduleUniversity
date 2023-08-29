'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timetables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      timestart: {
        type: Sequelize.STRING
      },
      timeend: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('timetables');
  }
};