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

    let connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.fmz53zz.mongodb.net/${process.env.mongodb_database}`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Failed to connect Database" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    const db = client.db();

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
