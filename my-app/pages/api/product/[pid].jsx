import Product from "../../Models/ProductsSchema"
import initDb from "../../Models/Conn";

initDb()

export default async (req,res)=>{

    switch(req.method){
        case "GET":
            await getProduct(req,res);
        break;
        case "DELETE":
            await deleteProduct(req,res);
        break;
    }
} 

const getProduct = async(req,res) =>{
    const {pid} = req.query;
    const product = await Product.findOne({_id:pid});
    res.status(200).json(product)
}

const deleteProduct = async (req,res)=>{
    const {pid} = req.query;
    await Product.findByIdAndDelete({_id:pid});
    res.status(200).json({})
}