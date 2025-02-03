import { Product } from "../models/product.models.js";

const patchItem = async( req , res )=>{
    const data = req.body
        const id= req.params.id
        const result= await Product.findByIdAndUpdate(
            id, data,{new:true}
        )  
        return res.json({result})
}

export {
    patchItem,
}