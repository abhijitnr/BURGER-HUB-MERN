const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  const { connection } = await mongoose.connect(process.env.MONGODB_URL);

  console.log(`Database is connected with ${connection.host}`);
};

module.exports = { connectDB };
