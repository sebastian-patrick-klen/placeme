import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const mongodb_url = process.env.MONGOBD_URL;
    let client;

    try {
      client = await MongoClient.connect(mongodb_url);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    const places = await db
      .collection('places')
      .find({})
      .sort({ metacritic: -1 })
      .limit(1)
      .toArray();

    res
      .status(200)
      .json({ test: 'Hello World!', env: process.env.MONGOBD_URL, places });
  } else {
    // Handle any other HTTP method
  }
}
