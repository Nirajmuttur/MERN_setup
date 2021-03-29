import app from './express'
import config from './../config/config'

const mongoose = require('mongoose')

//db connection
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
mongoose.connection.on('error',()=>{
    throw new Error('Unalbe to connect to db:${mongoUri}')
})


app.listen(config.port, (err)=>{
    if(err){
        console.log(err)
    }else{
    console.info('Server started %s.',config.port)
    }
})

