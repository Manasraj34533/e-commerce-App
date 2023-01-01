import mongoose from "mongoose";

function initDb(){
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    if(mongoose.connections[0].readyState){
        console.log("Already Connected");
        return;
    }

    mongoose.connection.on("connected",()=>{
        console.log("connection successful");
    });
    mongoose.connection.on("error",(error)=>{
        console.log("connection failed",err);
    })

}

export default initDb;