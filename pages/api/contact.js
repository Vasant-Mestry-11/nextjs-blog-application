import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).json({
        message: "Invalid Input",
      });
      return;
    }

    let client;
    try {
      client = await MongoClient.connect(process.env.MONGO_CONNECTION_URL);
    } catch (error) {
      res.status(500).json({ message: "Failed to connect Database" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const db = client.db("blog-site");

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        message: "Failed to add message",
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully added message",
      data: newMessage,
    });
  }
}

export default handler;
