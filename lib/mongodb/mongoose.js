import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    try {
      const uri = process.env.MONGODB_URI;
      return mongoose.connect(uri);
    } catch (error) {
      console.log(
        error,
        "Error connecting to mongodb database. Please check your connection"
      );
    }
  }
}
