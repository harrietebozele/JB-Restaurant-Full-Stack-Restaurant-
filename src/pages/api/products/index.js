import dbConnect from "../../../../util/mongo"
import Product from "../../../../models/Product"
export default async function handler(req,res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect();

  if(method === "GET"){
    try{
        const products = await Product.find();
        res.status(201).json(products);
    }catch(err){
        res.status(500).json(err);
    }

  }

  if(method === "POST"){
    if(!token || token!==process.env.token){
      return res.status(401).json("Forbidden");
    }
    try{
        const products = await Product.create(req.body);
        res.status(201).json(products);

    }catch(err){
        res.status(500).json(err);
    }
  }
}
