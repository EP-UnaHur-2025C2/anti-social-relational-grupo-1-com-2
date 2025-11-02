'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('PostTag', [
      {        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 5,
        tagId: 2

      },{        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 2,
        tagId: 1

      },{        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 2,
        tagId: 3

      },{        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 7,
        tagId: 2

      },{        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 4,
        tagId: 1

      },{        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 6,
        tagId: 2

      },{        
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 8,
        tagId: 3

      }

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
