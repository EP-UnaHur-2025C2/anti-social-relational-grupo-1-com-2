require('dotenv').config()
const { sequelize } = require('./db/models')

async function runSeeders() {
  try {
    console.log('Conectando a la base de datos...')
    await sequelize.authenticate()
    console.log('✅ Conexión exitosa')

    console.log('Sincronizando tablas...')
    await sequelize.sync({ force: true })
    console.log('✅ Tablas sincronizadas')

    console.log('Ejecutando seeders...')
    
    await require('./db/seeders/20251020161328-demo-users').up(sequelize.getQueryInterface(), sequelize.constructor)
    console.log('✅ Users seeded')
    
    await require('./db/seeders/20251020161527-demo-post').up(sequelize.getQueryInterface(), sequelize.constructor)
    console.log('✅ Posts seeded')
    
    await require('./db/seeders/20251020161509-demo-tags').up(sequelize.getQueryInterface(), sequelize.constructor)
    console.log('✅ Tags seeded')
    
    await require('./db/seeders/20251020161419-demo-comments').up(sequelize.getQueryInterface(), sequelize.constructor)
    console.log('✅ Comments seeded')
    
    await require('./db/seeders/20251020161559-demo-postImage').up(sequelize.getQueryInterface(), sequelize.constructor)
    console.log('✅ Post Images seeded')
    
    await require('./db/seeders/20251020170454-demo-users-tags').up(sequelize.getQueryInterface(), sequelize.constructor)
    console.log('✅ Users-Tags seeded')
    
    console.log('🎉 Todos los seeders ejecutados correctamente')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

runSeeders()