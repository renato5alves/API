import mongoose from "mongoose";

async function conectDatabase(){

    
    mongoose.connect(process.env.DB_CONECTION_STRING);
    return mongoose.connection;    
}
    

export default conectDatabase;