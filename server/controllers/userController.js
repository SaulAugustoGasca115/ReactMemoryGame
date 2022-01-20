const User = require('../models/userModel')

exports.update = async (req,res) => {

    const {name,email,victories,unvictories} = req.user

    try{

        const user = await User.findOneAndUpdate({email: email},{name,email,victories,unvictories}).exec((err,res) =>{
            if(err)
            {
                res.status(400).send(`User cannot Update`)
            }

            if(res)
            {
                res.json({
                    message:`User updated succesfully`
                })
            }
        })


       /* if(!user)
        {
            res.json(await new User({name,email,role,victories,unvictories})).save()
        }*/


    }catch(err)
    {
        console.log(`UPDATED USER FAILED`,err)
    }

}


exports.create = async (req,res) => {
    try{

        const user = await new User({name,email,role,victories,unvictories}).save()

        res.json(user)

    }catch(err)
    {
        console.log(`CREATE  USER FAILED`,err)
    }
}


exports.currentUser = async (req,res) =>{
    try{

        await User.find({email: req.user.email}).exec((err,user) => {
            if((err))
            {
                throw new Error(err)
            }

            res.json(user)
        })

    }catch(err)
    {
        console.log("GET USER FAILED",err)
    }
}