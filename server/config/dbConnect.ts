import mongoose from "mongoose";

const dbConnect = async () => {
  
  try {
    await mongoose.connect(`${process.env.Database_URI}`);
    console.log("connected!");

    // {
    //   dbName: 'questions',
    //   user: "neck",
    //   pass: "gOh7boylCxJIG8Sd"
    // }, (error: any) => {
    //   console.log(error);
    // }
    // {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true
    // }
    // )
    // {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true
    // })
    // console.log("connected to database");

  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
