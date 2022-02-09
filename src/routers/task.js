const express = require('express')
const router = new express.Router()
// const Task = require('../models/task')
const tasksController = require("../../Controllers/taskController");

router.post('/',tasksController.listTasks)
router.post('/addTask',tasksController.addTask)
router.post('/removeTask',tasksController.removeTask)
router.post('/searchTask',tasksController.searchTask)
router.post('/updateTask',tasksController.updateTask)

router.post('/listTask',tasksController.listTasks)

module.exports = router