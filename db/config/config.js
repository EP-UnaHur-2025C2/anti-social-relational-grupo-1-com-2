//development
const usernameDevelopment = process.env.USERNAME_DEVELOPMENT;
const passwordDevelopment = process.env.PASSWORD_DEVELOPMENT;
const databaseDevelopment = process.env.DATABASE_DEVELOPMENT;
const storageDevelopment = process.env.HOST_DEVELOPMENT;
const dialectDevelopment = process.env.DIALECT_DEVELOPMENT;

module.exports = {
    development: {
        username: process.env.USERNAME_DEVELOPMENT,
        password: process.env.PASSWORD_DEVELOPMENT,
        database: process.env.DATABASE_DEVELOPMENT,
        storage: process.env.HOST_DEVELOPMENT,
        dialect: process.env.DIALECT_DEVELOPMENT,
    },
    test: {
        usernameTest: process.env.USERNAME_TEST,
        passwordTest: process.env.PASSWORD_TEST,
        databaseTest: process.env.DATABASE_TEST,
        hostTest: process.env.HOST_TEST,
        dialectTest: process.env.DIALECT_TEST,
    },
    produccion: {

        usernameProduccion: process.env.USERNAME_PRODUCTION,
        passwordProduccion: process.env.PASSWORD_PRODUCTION,
        databaseProduccion: process.env.DATABASE_PRODUCTION,
        hostProduccion: process.env.HOST_PRODUCTION,
        dialectProduccion: process.env.DIALECT_PRODUCTION,
    }
}

