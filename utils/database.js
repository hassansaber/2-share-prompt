import mongoose from "mongoose";

let isConnected = false; // track the connection



export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }


  // try {
  //   const { connection } = await mongoose.connect(process.env.MONGODB_URI, { dbName: "share_prompt" });
  //   isConnected = true;
  //   console.log(`Mongodb is connected to ${connection.host}`);
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true
    console.log("connected to mongoose");
  } catch (error) {
    console.log("not connected to mongoose");
    console.log(error);
  }

}