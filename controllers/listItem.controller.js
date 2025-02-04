import { Product } from "../models/product.models.js";


const getAllItems = async (req, res) => {
    const data = await Product.find();
    res.json(data.reverse());


}
export {
    getAllItems
}