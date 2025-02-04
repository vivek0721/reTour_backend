import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import dbConnect from "./db/index.js";
import cors from "cors";

dotenv.config();
dbConnect();

const app = express()
const port = 8000
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import itemRouter from "./routes/item.routes.js"
app.use("/items", itemRouter)





export {app}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})