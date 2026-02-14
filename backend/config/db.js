import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nishantraj7859:nishant2964@cluster0.1hvp9wg.mongodb.net/food-del')
    .then(()=>{
        console.log("DB connected")
    })
}

//MONGODB_URI=mongodb+srv://nishantraj7859:nishant2964@cluster0.1hvp9wg.mongodb.net

