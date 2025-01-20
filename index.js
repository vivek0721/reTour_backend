import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import dbConnect from "./db/index.js";

dotenv.config();
dbConnect();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})