import express, { Express } from "express";
import mongoose from "mongoose";
import cors from 'cors';
// import { getAllData } from "./data";
import router from "./Routes/index.js";
import { corsOptions } from "./config/corsOptions.js";
import dbConnect from "./config/dbConnect.js";
// import { DotenvConfigOptions } from "dotenv";
import dotenv from 'dotenv';
dotenv.config();
// require('dotenv').config();
const app: Express = express();
// connect to monogoDB
dbConnect();

// app.use('/api/questions', (req, res) => {
//   res.status(200);
//   res.json(getAllData());
// });

// app.get('/', (req, res) => {
//   res.send("Hello client");
// });
// app.get('/user', (req, res) => {
//   res.send("Get user request");
// });
// app.post('/post', (req, res) => {
//   res.send("Post user request");
// });

// testing routes
app.use('/static', express.static('./public'));

app.use(cors(corsOptions));
// HTTP APIs
app.use('/api', router);

const port: string = process.env.PORT || "3001";

mongoose.connection.once('open', () => {
  console.log(`Connected to ${process.env.db_name} DB.`);
  app.listen(port, () => {
    console.log(`Application is ready to serve on port ${port}`);
  })
})
