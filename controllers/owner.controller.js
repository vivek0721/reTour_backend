import { UploadOnCloudinary } from "../db/cloudinary.js";
import { Product } from "../models/product.models.js";

const registerItemOwner= async(req, res)=>{

    const {title , desc, date, location, ownerName, ownerNumber, ownerUid, flag} = req.body

    if (!req.body) {
        return res.status(400).json({message: "Request body is missing"});
      }

    if(!title){
        return res.status(400).json({message: "Please enter a title..."})
    }
     
    const imageLocalPath= req.file.path;
    if(!imageLocalPath){
        return res.status(400).json({message: "Please add an image..."})
    }
    
    const image= await UploadOnCloudinary(imageLocalPath)
    if(!image){
        return res.status(400).json({message: "Please enter an image."})
    }
    

   const product = await Product.create({
        title,
        desc,
        date,
        location,
        image: image?.secure_url,
        ownerName,
        ownerNumber,
        ownerUid,
        finderName:"",
        finderNumber:"",    
        finderUid:"", 
        flag,
    })
   
    const createdProduct = await Product.findById(product._id)

    return res.status(201).json({createdProduct})
  }
   
  
 
export{
    registerItemOwner,
  }