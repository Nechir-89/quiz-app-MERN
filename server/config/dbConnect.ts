import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.Database_URI || "")
      // {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true
      // })
      console.log("connected to database");
      
  } catch (error) {
    console.log(error);

  }
}

export default dbConnect;