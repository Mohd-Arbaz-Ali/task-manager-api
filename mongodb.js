const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL=process.env.MONGODB_URL
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser : true},(error,client)=>{
    if(error)
        return console.log('Unable to connect to the database!')
    const db=client.db(databaseName)

    db.collection('tasks').deleteOne({description : 'internship'}).then((result)=>{
        console.log(result)
    }).then((error)=>{
        console.log(error)
    })

    db.collection('tasks').find({compeleted : true}).toArray((error,result)=>{
        console.log(result)
    })
})