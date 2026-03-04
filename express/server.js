import app from "./app.js";
import connectDb from "./configs/db.js";
import env from "./configs/env.js";
import { connectRedis } from "./configs/redis.js";

const startServer = async() => {

  try {
    
    await connectDb();
    // await connectRedis();

    app.listen(env.PORT, () => {
      console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });

  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }

};

startServer();

