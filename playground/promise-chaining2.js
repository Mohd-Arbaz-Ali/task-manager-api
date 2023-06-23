require('../src/db/mongoose')
const Task=require('../src/models/task')

// Task.findByIdAndRemove('648b6f069bd7b3cc4a0887ef').then(()=>{
//     return Task.countDocuments({completed : false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : true })
    return count
}

deleteTaskAndCount('648b6f39c891a791a79706ac').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})