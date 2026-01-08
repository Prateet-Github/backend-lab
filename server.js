import app from "./app.js";
import connectDb from "./configs/db.js";
import env from "./configs/env.js";

const startServer = async() => {

  await connectDb();

  app.listen(env.PORT,() => {
    console.log(`Backend Lab Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
  });
};

startServer();

