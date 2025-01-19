import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import dbConnect from "./db/index.js";

dotenv.config();
dbConnect();

