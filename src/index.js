const express = require('express')
const db = require('../db/models')
const router = require('./routes/usersRoutes')
const postRouter = require('./routes/postRoutes')
const postImageRouter = require('./routes/post_imageRoutes')
const commentRouter = require('./routes/commentRoutes')
const tagRouter = require('./routes/tagRoutes')
require('dotenv').config()
const app = express()

app.use(express.json())

app.use('/users', router)
app.use('/post', postRouter)
app.use('/post_image', postImageRouter)
app.use('/comment', commentRouter)
app.use('/tag', tagRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
    await db.sequelize.sync({force:true})
})
