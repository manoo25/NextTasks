import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client;
const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ||
  (global._mongoClientPromise = new MongoClient(uri, options).connect());

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}



export default clientPromise;
