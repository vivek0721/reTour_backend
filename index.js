import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import dbConnect from "./db/index.js";

dotenv.config();
dbConnect();

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import itemRouter from "./routes/item.routes.js"
app.use("/newItem", itemRouter)






export {app}


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})