import express, { Express } from "express";
// import { getAllData } from "./data";
const router = require("./Routes/index.ts");
import cors from 'cors';
import { corsOptions } from "./config/corsOptions";
import dbConnect from "./config/dbConnect";
import mongoose from "mongoose";
require('dotenv').config();

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
