export default function handler(req, res) {
//save to DB
  
  console.log(req.body)

  if (req.method === 'POST') {
    res.json({message:"ok"})
  }
}