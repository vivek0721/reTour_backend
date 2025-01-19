import mongoose from "mongoose";

const dbConnect= async()=>{
    try {
        const dbConnection= await mongoose.connect(`${process.env.MONGODB_URI}/ReTour`)
        console.log(`\n MongoDB Connected!! `);
    }catch(error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default dbConnect;