const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const cors = require('cors')
const {json} = require("body-parser")
dotenv.config()

//app
const app = express()

//middlewares
app.use(morgan("dev"))
app.use(json({limit:"2mb"}))
app.use(cors())


//redirect automaticalle to the routes
fs.readdirSync("./routes").map((r) =>
    app.use("/api",require("./routes/" + r))
)

mongoose.connect(process.env.DATABASE_LOCAL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res) => {
    console.log("DB LOCAL CONNECTED SUCESFULLY")
}).catch((err) =>{
    console.log("DB LOCAL CONNECTED FAILED :( ",err)
})


const port = process.env.PORT

app.listen(port,() => {
    console.log(`SERVER RUNNING IN PORT ${port}`)
})

