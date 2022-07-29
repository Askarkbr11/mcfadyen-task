const express = require("express")
const app = express()
require("dotenv").config()
const port=process.env.PORT
const {connect} = require("mongoose")
const mongodbUrl =  process.env.MONGODB_LOCAL_URL
const TravelRouter = require("./routes/travel")

const connectToDb =async url=>{
    await connect(url)
    console.log("db connected")
}
connectToDb(mongodbUrl)

app.use("",TravelRouter)

app.listen(port,err=>{
    if(err) throw err
    console.log(`server is running on port ${port}`)
})