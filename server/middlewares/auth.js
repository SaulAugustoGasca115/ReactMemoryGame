const admin = require('../firebase')
const User = require("../models/userModel")

exports.authCheck = async (req,res,next) => {

    try{

        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)

        console.log("FIREBASE AUTH CHECK ",firebaseUser)

        req.user = firebaseUser

        return next()

    }catch(err)
    {
        res.status(401).json9({
            err:'Invalid or Expired Token from Firebase User'
        })
    }


}

exports.adminCheck = async (req,res,next) => {

    try{

        const {email} = req.user


        const adminUser = await User.findOne({email: email}).exec()

        if(adminUser !== 'admin')
        {
            res.status(403).json({
                err: "Admin Resource, Access Denied"
            })
        }else{
            return next()
        }

    }catch(err)
    {
        console.log("ADMIN CHECK ERROR",err)
    }



}