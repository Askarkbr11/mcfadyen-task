const TravelSchema = require("../model/travel")
const axios= require("axios")
const {parseString} = require("xml2js")


exports.getAllTravelData= async(req,res)=>{
    try{
        let {data}= await axios.get("http://restapi.adequateshop.com/api/Traveler?page=6")
        parseString(data,async(err,result)=>{
            let fdata =result.TravelerinformationResponse.travelers[0].Travelerinformation;
          let newObj = fdata.map(v => {
            let obj = {
              id: v.id[0],
              name: v.name[0],
              email: v.email[0],
              createdat: v.createdat[0],
              adderes: v.adderes[0],
            };
            return obj;
          });
          await TravelSchema.insertMany(newObj)
          res.status(200).json({message:"successfully converted to json",newObj})
        })
    }catch(err){
        res.status(500).json({message:"Internal server error",err})
    }
}