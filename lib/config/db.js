import mongoose from "mongoose";

export const ConnectDB = async () => {
    // const mongoUri =
    await mongoose.connect(process.env.MONGOURI);
    console.log("DB Connected");
}