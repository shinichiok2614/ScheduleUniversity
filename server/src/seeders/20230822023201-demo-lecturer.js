'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'lecturers',
      [
        {
          firstname: 'Ho',
          lastname: 'Huy Luat',
          username: 'hohuyluat',
          password: 'asdfsaf',
          phone: '123456',
          email: 'abc@gmail.com',
          dateofbirth: '01011995',
          address: 'asdf',
          degree: 'asfsd',
          acedemicRank: 'asf',
          armyRank: 'asf',
          profilePicture: 'asfsf',
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
