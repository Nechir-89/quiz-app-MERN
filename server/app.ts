import express from "express";

const app = express()
const port = process.env.PORT || 8000;




app.listen(port, () => {
  console.log(`Application is ready to serve on port ${port}`);
  
})
