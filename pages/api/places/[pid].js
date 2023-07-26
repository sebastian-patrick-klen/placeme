export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ test: 'Hello World!' });
  } else {
    // Handle any other HTTP method
  }
}
