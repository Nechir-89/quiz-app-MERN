import express, { Express } from "express";
// import { getAllData } from "./data";
import router from "./routes/index";
import cors from 'cors';
import { corsOptions } from "./config/corsOptions";

const app: Express = express();


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
app.listen(port, () => {
  console.log(`Application is ready to serve on port ${port}`);
})
