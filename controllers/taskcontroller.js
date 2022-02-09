const { title } = require('process')
let taskArray = []

let loadTasks =  () => {
    task = taskArray
    return task
}

const saveTask = (taskt) => {
    taskArray = taskt
    // console.log(taskArray)
    return taskArray
}

const addTask = (req,res) => {
    const title = req.query.title
    const task = req.query.task
    let taskt = loadTasks()
    if(title && task)
    {
    const duplicateTasks = taskt.filter((taskd) => {
        return taskd.title === title
    })

    if (duplicateTasks.length === 0) {
        taskt.push({
            title: title, 
            task: task
        })
        console.log('Task Added')
    } 
    else {
        console.log('Task title already exists. Try again')
    }
    saveTask(taskt)
    return res.status(404).send(taskArray)
}
else
{
    console.log('Invalid entry')
    res.status(400).send()
}
}

const removeTask = (req,res) => {
    const title = req.query.title
    
    let taskt = loadTasks()
    if(title)
    {
    const tasksToKeep = taskt.filter((taskd) => {
        return taskd.title !== title
    })

    if (taskt.length > tasksToKeep.length) {
        console.log('Task removed')
        saveTask(tasksToKeep)
    } 
    else {
        console.log('Task not found. Try again')
    }
    return res.send(taskArray)
}
else
{
    console.log('Invalid entry')
}
return res.send(taskArray)
}
const searchTask = (req,res) => {
    const title = req.query.title
    const task = req.query.task
    let taskt = loadTasks()
    let requiredTask = taskt.find((taskd) => taskd.title === title)
    if(title)
    {
    if (requiredTask) {
        console.log(requiredTask.title)
        console.log(requiredTask.task)
    } 
    else {
        console.log('Note not found. Try again')
    }
}
else
{
    console.log('Invalid entry')
}
return res.send(requiredTask)
}
const updateTask = (req,res) => {
    const title = req.query.title
    const task = req.query.task

    let taskt = loadTasks()
    
    for(let taskd of taskt){
           if (taskd.title === title){
               taskd.task = task
               console.log('byeeeeeeeeeeeeeeeeeeeeeeeeeee')
           }          
        }           
        return res.send('Task updated')
}
const listTasks = (req,res) => {
    return res.send(taskArray)
}
module.exports = {
    addTask: addTask,
    removeTask: removeTask,
    updateTask: updateTask,
    searchTask: searchTask,
    listTasks: listTasks
}