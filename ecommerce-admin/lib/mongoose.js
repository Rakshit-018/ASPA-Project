/*import mongoose from "mongoose";

export function mongooseConnect()
{
    
    if(mongoose.connection.readyState === 1)
    {
        return mongoose.connect.asPromise();
    }
    else{
        const uri = process.env.MONGODB_URI;
        return mongoose.connect(uri);
    }
}*/

// lib/mongoose.js
import mongoose from 'mongoose';

export async function mongooseConnect() {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection; // Connection already exists, return it
    } else {
      const uri = process.env.MONGODB_URI;
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Other mongoose connection options
      };

      await mongoose.connect(uri, options);
      return mongoose.connection; // Return the connection after establishing it
    }
  } catch (error) {
    throw error;
  }
}
