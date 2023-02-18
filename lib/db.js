import { MongoClient } from 'mongodb';

export async function connectToDB() {
  let client;
  try {
    client = await MongoClient.connect(
      'mongodb+srv://sebastian:A0vNScvObFr53Mnn@cluster0.cb3g0gh.mongodb.net/PlaceMe?retryWrites=true&w=majority'
    );
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to database.' });
    return;
  }

  return client;
}
