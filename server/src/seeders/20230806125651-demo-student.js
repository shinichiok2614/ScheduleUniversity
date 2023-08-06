'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'students',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'test',
          username: 'test',
          password: 'test',
          phone: 'test',
          email: 'test',
          age: 1,
          address: 'test',
          class: 'test',
          army_rank: 'test',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
