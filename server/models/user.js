  
const mongoose = require('mongoose');
const crypto = require('crypto')

const supplierSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { 
        type: String, 
        unique: true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date,
    hashed_password:{
        type:String,
        required:'Password is required'
    },
    seller:{
        type:Boolean,
        default:false
    },
    salt:String

});

supplierSchema.virtual('password').set(function(password){
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
}).get(function(){
    console.log(this._password)
    return this._password
})

supplierSchema.methods={
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto.createHmac('sha1',this.salt).update(password).digest('hex')
        }catch(err){
            
            return ''
        }
    },
    makeSalt: function(){
        return Math.round((new Date().valueOf() * Math.random()))+''
    }
}

//password filed validation
supplierSchema.path('hashed_password').validate(function(v){
    if(this._password && this._password.length < 6){
        this.invalidate('password','Password must br atleast 6 characters')
    }
    if(this.isNew && !this._password){
        this.invalidate('password','Password is required')
    }
},null)

module.exports = mongoose.model('Admin', supplierSchema);