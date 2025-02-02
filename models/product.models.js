import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: String,
    date: Date,
    location: String,
    image:{
        type: String,  //cloudinary
        required: true
    },
    ownerName:String,
    ownerNumber: Number,
    ownerUid: String,
    
    finderName: String,
    finderNumber: Number,    
    finderUid: String, 
        
    flag: {
        type: String,
        enum: ['lost', 'found', 'claimed'],
        required: true,
      },
},{timestamps: true})

export const Product= mongoose.model('Product', productSchema )

