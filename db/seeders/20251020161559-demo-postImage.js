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
     await queryInterface.bulkInsert('Post_image', [
      {
        url : 'https://www.google.com/imgres?q=la%20galaxia&imgurl=https%3A%2F%2Fstatic.nationalgeographicla.com%2Ffiles%2Fstyles%2Fimage_3200%2Fpublic%2Fnationalgeographic_2191299_bx.webp%3Fw%3D1600%26h%3D1622%26p%3Dtop&imgrefurl=https%3A%2F%2Fwww.nationalgeographicla.com%2Fespacio%2F2024%2F07%2Fque-es-una-galaxia-conoce-los-8-tipos-que-existen-segun-la-nasa&docid=jnpLq92fhcSciM&tbnid=OdrMWnjJG0WXDM&vet=12ahUKEwii1MDNprOQAxXWrpUCHdsUJIsQM3oECBEQAA..i&w=1600&h=1622&hcb=2&ved=2ahUKEwii1MDNprOQAxXWrpUCHdsUJIsQM3oECBEQAA',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },{
        url : 'https://www.google.com/imgres?q=la%20galaxia&imgurl=https%3A%2F%2Fconcepto.de%2Fwp-content%2Fuploads%2F2019%2F07%2Fgalaxia-e1561948092846.jpg&imgrefurl=https%3A%2F%2Fconcepto.de%2Fgalaxia%2F&docid=-S1I9cE6DUl8qM&tbnid=cISpFuJizZ_3bM&vet=12ahUKEwii1MDNprOQAxXWrpUCHdsUJIsQM3oECBgQAA..i&w=800&h=400&hcb=2&ved=2ahUKEwii1MDNprOQAxXWrpUCHdsUJIsQM3oECBgQAA',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        url :'https://www.google.com/imgres?q=la%20tierra&imgurl=https%3A%2F%2Fconcepto.de%2Fwp-content%2Fuploads%2F2019%2F10%2Fplaneta-tierra-e1570462059356-800x400.jpg&imgrefurl=https%3A%2F%2Fconcepto.de%2Fplaneta-tierra%2F&docid=U8vqQhQHh4UrCM&tbnid=UegXq1fbR1hXwM&vet=12ahUKEwjQzeyfprOQAxWwuJUCHZ40LwAQM3oECBkQAA..i&w=800&h=400&hcb=2&ved=2ahUKEwjQzeyfprOQAxWwuJUCHZ40LwAQM3oECBkQAA' ,
        createdAt : new Date(),
        updatedAt: new Date()

      },{
        url : 'https://www.google.com/imgres?q=argentina%20campeon&imgurl=https%3A%2F%2Fcdn.conmebol.com%2Fwp-content%2Fuploads%2F2022%2F12%2FARGENTINA-CAMPEONES-750x485-1.png&imgrefurl=https%3A%2F%2Fwww.conmebol.com%2Fnoticias%2Fla-copa-regresa-a-casa-argentina-campeon-mundial%2F&docid=r-PKhIU3eFCZAM&tbnid=ciNN3OIklxpLwM&vet=12ahUKEwiS0bqQprOQAxWtCbkGHRuGHT4QM3oECBgQAA..i&w=750&h=485&hcb=2&ved=2ahUKEwiS0bqQprOQAxWtCbkGHRuGHT4QM3oECBgQAA' ,
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
