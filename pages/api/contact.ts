export default function handler(req:any,res:any) {
    if (req.method === "POST"){
        // save to DB
        console.log(req.body)
        res.json({message:'OK'})
    }
}