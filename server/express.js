import devBundle from './devBundle'
import template from './../template'

import path from 'path'
const express = require('express')
const bodyParser = require('body-parser')
const CURRENT_WORKING_DIR = process.cwd()

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/dist',express.static(path.join(CURRENT_WORKING_DIR,'dist')))


app.get('/',(req,res)=>{
    res.status(200).send(template())
})



devBundle.compile(app)

export default app