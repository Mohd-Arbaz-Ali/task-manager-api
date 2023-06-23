require('../src/db/mongoose')

const User=require('../src/models/user.js')

User.findByIdAndUpdate('648b69e3bba4c40d2c6f292c',{ age:21 }).then((user)=>{
    console.log(user)
    return User.countDocuments({age : 21})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})