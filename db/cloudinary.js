import { v2 as cloudinary } from "cloudinary";
import * as fs from 'fs';

import dotenv from 'dotenv';

// Load env variables first
dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const UploadOnCloudinary= async (localFilePath)=>{

   try{
    if(!localFilePath) return null;
       const response=  await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      })
      if(response){
         fs.unlinkSync(localFilePath)
      }
      return response;
       
   }catch(error){
      console.log("Upload Error", error)
      fs.unlinkSync(localFilePath); // remove the temp file
   }
}


export {UploadOnCloudinary}