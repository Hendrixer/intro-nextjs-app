export default function handler(req, res) {
  if (req.method === 'POST') {
    // save to DB!
    console.log(req.body)
    res.json({message: 'ok'})
  }
}