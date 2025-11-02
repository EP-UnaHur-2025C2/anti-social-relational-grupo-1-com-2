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
      await queryInterface.bulkInsert('Posts', [
      {
        texto : 'La tierra es redonda',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },{
        texto : 'La galaxia es gigante',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },{
        texto : 'Somos campeones del mundo!!!',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },{
        texto : 'Vamos a ganar nomas',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6
      },{
        texto : 'Rápido y Fácil: Postre de 5 minutos',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },{
        texto : 'Viaja barato: Tres destinos imperdibles',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5
      },{
        texto : 'Tips geniales para ahorrar energía ahora',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },{
        texto : 'La ciencia detrás de la felicidad',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },{
        texto : 'Momentos inolvidables capturados en foto',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },{
        texto : 'No Creerás lo que pasó después',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },


   
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
