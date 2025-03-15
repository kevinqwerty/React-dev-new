import { MongoClient, ObjectId } from "mongodb";
import { Item } from './types/item';

const uri = "YOUR_MONGODB_CONNECTION_STRING";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

const db = client.db("lostAndFound");
const itemsCollection = db.collection<Item>("items");

async function getItemById(id: string): Promise<Item | null> {
  try {
    const item = await itemsCollection.findOne({ _id: new ObjectId(id) });
    return item;
  } catch (error) {
    console.error("Failed to fetch item by ID", error);
    return null;
  }
}

export { db, connectToDatabase, getItemById };