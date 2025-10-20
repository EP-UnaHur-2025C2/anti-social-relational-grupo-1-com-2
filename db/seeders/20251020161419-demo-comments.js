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
    await queryInterface.bulkInsert('Comment', [
      {
        texto : 'Genial',
        createdAt: new Date(),
        updatedAt: new Date()

        
      },{
        texto: 'Muy cierto',
        createdAt: new Date(),
        updatedAt: new Date()
       
      },{
        texto: 'siii es cierto',
        createdAt : new Date(),
        updatedAt: new Date()
      },{
        texto: 'Muy bien dichoo!!!!',
        createdAt : new Date(),
        updatedAt: new Date()
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
