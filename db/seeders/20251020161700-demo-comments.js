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
    await queryInterface.bulkInsert('Comments', [
      {
        texto : 'Genial',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        postId: 5

        
      },{
        texto: 'Muy cierto',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        postId: 5
       
      },{
        texto: 'siii es cierto',
        createdAt : new Date(),
        updatedAt: new Date(),
        userId: 4,
        postId: 8

      },{
        texto: 'Muy bien dichoo!!!!',
        createdAt : new Date(),
        updatedAt: new Date(),
        userId: 2,
        postId: 9

      }
    ]);
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
