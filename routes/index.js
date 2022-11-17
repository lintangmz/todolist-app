const express = require('express')
const router = express.Router()
const restrict = require('../middlewares/restrict')

const userController = require('../controllers').user
const todosController = require('../controllers').todos

router.get('/', (req, res) => {
    res.render('index')
})

// user
router.post('/register', userController.register)
router.get('/showUser', restrict, userController.show)
router.post('/login', userController.login)
router.get('/authorization', restrict, userController.authorization)

// todos
router.post('/addTask', restrict, todosController.add)
router.get('/showTasks', restrict, todosController.show)
router.get('/showTasks/byUser/:id', restrict, todosController.showByUser)
router.put('/update/:id', restrict, todosController.update)
router.delete('/deleteById/:id', restrict, todosController.deleteById)

module.exports = router