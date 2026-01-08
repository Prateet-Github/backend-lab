import mongoose from 'mongoose';
import env from './env.js';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

export default connectDb;