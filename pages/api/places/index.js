import { connectDatabase } from '@/helpers/db';
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    const db = client.db();

    let places;

    try {
      places = await db.collection('places').find().toArray();
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(200).json({ places });
  }

  if (req.method === 'POST') {
    const connectionString =
      'mongodb+srv://sebastian:A0vNScvObFr53Mnn@cluster0.cb3g0gh.mongodb.net/place-me?retryWrites=true&w=majority';

    let client;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    let places;

    try {
      places = await db.collection('places').find().toArray();
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(200).json({ places });
  }
}
