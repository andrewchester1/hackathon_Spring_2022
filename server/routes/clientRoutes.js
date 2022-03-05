const express = require('express')
const router = express.Router()
const authorize = require('../middleware/authorize')
const ClientController = require('../controllers/ClientController')

// CREATE User
router.post('/create-user', ClientController.createUser)

// POST Login/Authenticate User
router.post('/authenticate', ClientController.authenticate)

// GET Verfiy User
router.get('/verify', ClientController.verifyUser)

// UPDATE User Data
// router.put('/:id', authorize(), ClientController.updateUser)

// DELETE User
// router.delete('/:id', authorize(), ClientController.deleteAccount)


module.exports = router