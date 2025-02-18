const express = require('express')
const tasksController = require('./controllers/tasksController')
const router = express.Router()
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddleware.validateFieldStatus, 
  tasksMiddleware.validateFieldTitle, tasksController.updateTask)

module.exports = router