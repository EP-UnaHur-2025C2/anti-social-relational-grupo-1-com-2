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
      await queryInterface.bulkInsert('Post', [
      {
        texto : 'La tierra es redonda',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        texto : 'La galaxia es gigante',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        texto : 'Somos campeones del mundo!!!',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        texto : 'Vamos a ganar nomas',
        createdAt: new Date(),
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
