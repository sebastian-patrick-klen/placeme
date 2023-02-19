// export async function connectToDB() {
//   const connectionString =
//     'mongodb+srv://sebastian:A0vNScvObFr53Mnn@cluster0.cb3g0gh.mongodb.net/place-me?retryWrites=true&w=majority';

import { MongoClient } from 'mongodb';

//   let client;

//   try {
//     client = await MongoClient.connect(connectionString);
//   } catch (err) {
//     res.status(500).json({ message: 'Could not connect to database.' });
//     return;
//   }

//   return client;
// }

// export function connectionString() {
//   return `mongodb+srv://sebastian:A0vNScvObFr53Mnn@cluster0.cb3g0gh.mongodb.net/place-me?retryWrites=true&w=majority`;
// }

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://sebastian:A0vNScvObFr53Mnn@cluster0.cb3g0gh.mongodb.net/place-me?retryWrites=true&w=majority'
  );

  return client;
}
