const mongoose=require("mongoose"),Schema=mongoose.Schema,markerSchema=new Schema({name:String,lat:Number,lng:Number,has_been:Boolean,_user:{type:Schema.Types.ObjectId,ref:"User"}});mongoose.model("markers",markerSchema);