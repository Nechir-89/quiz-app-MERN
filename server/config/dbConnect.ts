import mongoose from "mongoose";

const dbConnect = async () => {
  const uri: string = process.env.Database_URI || "";
  try {
    await mongoose.connect(uri, () => ({
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    );
    console.log("connected!");

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
