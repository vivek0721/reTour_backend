import { UploadOnCloudinary } from "../db/cloudinary.js";
import { Product } from "../models/product.models.js";
import { GoogleGenerativeAI } from "@google/generative-ai";



const registerItemFinder= async(req, res)=>{

    const {title , desc, date, location, finderName, finderNumber, finderUid, flag} = req.body

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
    
    //gemini descGenerator
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

      const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

      const imageResp = await fetch(image.secure_url         
      )
          .then((response) => response.arrayBuffer());

      const descResult = await model.generateContent([
          {
              inlineData: {
                  data: Buffer.from(imageResp).toString("base64"),
                  mimeType: "image/jpeg",
              },
          },
         `Generate a description for the uploaded image using ${title} for reference in 2 line, mostly focus on item brand and product name and its function`,
      ]);

    console.log(descResult.response.text() );



   const product = await Product.create({
        title,
        desc: descResult?.response?.text() || desc,
        date,
        location,
        image: image?.secure_url,
        ownerName:"",
        ownerNumber: "",
        ownerUid: "",
        finderName,
        finderNumber,    
        finderUid, 
        flag,
    })
   
    const createdProduct = await Product.findById(product._id)
    //console.log(createdProduct)
    return res.status(201).json({createdProduct})
  }
   

  


 
export{
    registerItemFinder,
  }