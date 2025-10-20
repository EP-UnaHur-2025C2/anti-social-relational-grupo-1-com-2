'use strict';

const { date } = require('joi');

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
    await queryInterface.bulkInsert('Users', [
      {
        nickName : 'Pollito12',
        email : 'pollito@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },{
        nickName : 'Ricardo96',
        email : 'ricardo_96@gmail.com',
        createdAt : new Date(),
        updatedAt: new Date()

      },{
        nickName : 'kim22',
        email : 'kim22@gmail.com',
        createdAt : new Date(),
        updatedAt: new Date()

      },{
       nickName : 'carlos90',
        email : 'carlos90@gmail.com',
        createdAt : new Date(),
        updatedAt: new Date()
      },{
       nickName : 'juan02',
        email : 'juan02@gmail.com',
        createdAt : new Date(),
        updatedAt: new Date()
      },{
       nickName : 'cami94',
        email : 'cami94@gmail.com',
        createdAt : new Date(),
        updatedAt: new Date()
      },{
       nickName : 'shei86',
        email : 'shei86@gmail.com',
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
