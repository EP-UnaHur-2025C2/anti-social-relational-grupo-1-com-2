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
     await queryInterface.bulkInsert('Post_images', [
      {
        url : 'https://picsum.photos/500/500',
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 5
        
      },{
        url : 'https://picsum.photos/1000/1000',
        createdAt: new Date(),
        updatedAt: new Date(),
        postId: 2

      },{
        url :'https://picsum.photos/200/300' ,
        createdAt : new Date(),
        updatedAt: new Date(),
        postId: 8

      },{
        url : 'https://picsum.photos/600/800' ,
        createdAt : new Date(),
        updatedAt: new Date(),
        postId: 10
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
