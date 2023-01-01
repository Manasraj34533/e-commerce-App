import initDb from "../Models/Conn";
import Product from "../Models/ProductsSchema"
initDb();

export default async (req,res)=>{

    switch(req.method){
        case "GET":
            await getAllProduct(req,res);
        break;
        case "POST":
            await saveProduct(req,res);
        break;
    }
} 

const getAllProduct = async(req,res) =>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json("Internal Server Error")
    }
}

const saveProduct = async(req,res)=>{
    const {name,price,mediaUrl,description} = req.body;
    console.log(name,price,mediaUrl,description);
    if(!name || !price || !mediaUrl || !description){
        return res.status(422).json({error:"Please Fill All Required Fields"});
    }
    const product = await new Product({
        name,
        price,
        mediaUrl,
        description,
    }).save();
    res.status(201).json(product)
}