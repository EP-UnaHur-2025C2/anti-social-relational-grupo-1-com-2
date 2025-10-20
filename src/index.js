const express = require('express')
const db = require('../db/models')
const router = require('./routes/usersRoutes')
const postRouter = require('./routes/postRoutes')
const postImageRouter = require('./routes/post_imagesRoutes')
const commentRouter = require('./routes/commentRoutes')
const tagRouter = require('./routes/tagRoutes')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/users', router)
app.use('/post', postRouter)
app.use('/post_image', postImageRouter)
app.use('/comment', commentRouter)
app.use('/tag', tagRouter)

// Swagger UI
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
    console.log(`Swagger Docs en http://localhost:${PORT}/api-docs`);
    await db.sequelize.sync()
})
