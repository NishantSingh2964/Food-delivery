import foodModel from "../models/foodModel.js"
import fs from 'fs'
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

//add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    // Upload buffer to Cloudinary
    const uploadFromBuffer = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "food-app" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const uploadResult = await uploadFromBuffer();

    const newFood = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: uploadResult.secure_url,
    });

    await newFood.save();

    res.json({ success: true, message: "Food Added" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Upload Failed" });
  }
};


//all food list
const listFood = async (req, res)=>{
   try {
      const foods = await foodModel.find({});
      res.json({success:true, data: foods})
   } catch (error) {
      console.log(error);
      res.json({success: false, message: "Error"});
   }
}

//remove food item
const removeFood = async (req, res)=>{
   try {
      const food = await foodModel.findById(req.body.id);
      fs.unlink(`uploads/${food.image}`,()=>{})

      await foodModel.findByIdAndDelete(req.body.id);
      res.json({success:true, message: "Food Removed"})

   } catch (error) {
      console.log(error);
      res.json({success:false, message:"Error"});
   } 
}

export {addFood, listFood, removeFood}