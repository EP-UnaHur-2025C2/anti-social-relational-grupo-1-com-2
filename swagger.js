const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API UnaHur Anti-Social Net - Grupo 1 Comisión 2",
    description:
      "Se encuentra inspirada en plataformas populares que permiten a los usuarios realizar publicaciones y recibir comentarios sobre las mismas.",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger.yaml";
const endpointsFiles = [
  "./src/index.js",
  "./src/routes/usersRoutes.js",
  "./src/routes/postRoutes.js",
  "./src/routes/post_imagesRoutes.js",
  "./src/routes/commentRoutes.js",
  "./src/routes/tagRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
