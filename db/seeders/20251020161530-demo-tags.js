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
     * 
    */
    await queryInterface.bulkInsert('Tags', [
      {
        texto : '#elmundo',
        createdAt: new Date(),
        updatedAt: new Date()

        
      },{
        texto: '#lagalaxia',
        createdAt: new Date(),
        updatedAt: new Date()
       
      },{
        texto: '#SOMOSCAMPEONES',
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
