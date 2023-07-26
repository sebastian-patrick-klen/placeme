export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ test: 'Hello World!', env: process.env.API_URL });
  } else {
    // Handle any other HTTP method
  }
}
