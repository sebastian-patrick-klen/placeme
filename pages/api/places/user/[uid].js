import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { uid } = req.query;

    const mongodb_url = process.env.MONGOBD_URL;
    let client;

    try {
      client = await MongoClient.connect(mongodb_url);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    const query = {
      creator: new ObjectId(uid),
    };

    const settings = {};

    const places = await db
      .collection('places')
      .find(query, settings)
      .sort({ metacritic: -1 })
      .toArray();

    res.status(200).json({ places, length: places.length });
  } else {
    // Handle any other HTTP method
  }
}
