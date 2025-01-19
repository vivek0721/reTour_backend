import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: String,
    date: Date,
    Location: String,
    owner_details:{
        name: String,
        owner_number: Number,
        uid: String,
    },
    finder_detail:{
        name: String,
        finder_number: Number,
        uid: String
    },
    flag: {
        type: String,
        enum: ['lost', 'found', 'claimed'],
        required: true,
      },
},{timestamps: true})

export const Product= mongoose.model('Product', productSchema )