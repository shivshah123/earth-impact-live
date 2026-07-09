const mongoose = require("mongoose");

module.exports = async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  // Check if MongoDB URI is configured
  if (!mongoUri || mongoUri.includes("username:password")) {
    console.log("MongoDB URI not configured. App will run without database connection.");
    return;
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000, // Wait up to 10 seconds
      connectTimeoutMS: 10000,         // Connection timeout
    });

    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection failed.");
    console.error("Reason:", error.message);

    // Helpful hints for common issues
    if (error.message.includes("ECONNREFUSED")) {
      console.log("\nPossible causes:");
      console.log("1. Check your internet connection.");
      console.log("2. Verify the MongoDB Atlas connection string.");
      console.log("3. Ensure the password is URL encoded (e.g., @ becomes %40).");
      console.log("4. Confirm 0.0.0.0/0 is added in MongoDB Atlas Network Access.");
      console.log("5. Verify the database user exists and has the correct password.");
    }
  }
};