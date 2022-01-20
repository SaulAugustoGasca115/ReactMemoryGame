const express = require('express')
const router = express.Router()


//middlewares
const {authCheck,adminCheck} = require("../middlewares/auth")

//controllers
const {update,currentUser,create} = require('../controllers/userController')



router.post("/create-user",authCheck,create)
router.put("/update-user",authCheck,update)
router.post("/curren-user",authCheck,currentUser)
router.post("/current-admin",authCheck,adminCheck,currentUser)



module.exports = router