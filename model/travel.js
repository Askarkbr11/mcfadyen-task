const {model,Schema} = require("mongoose")

const TravelSchema = new Schema({
    id:{
        type:Number,
        required:true
    },name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },adderes:{
        type:String,
        required:true
    },createdat:
    {
        type:Date,
        required:true
    }
})

module.exports= model("travel",TravelSchema)