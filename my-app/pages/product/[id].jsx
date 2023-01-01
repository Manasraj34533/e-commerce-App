import Navbar from "../components/Navbar";
import { useRouter } from "next/router"
import { useRef,useEffect } from "react";
import baseUrl from "../Models/BaseUrl";

const Product = ({ product }) => {

    useEffect(() => {
        M.Modal.init(modelRef.current)
    }, [])
    
    const router = useRouter();
    const modelRef = useRef(null);
    
    if (router.isFallback) {
        return "Loading...."
    }


    const getModel = () => {
        return (
            <div id="modal1" className="modal" ref={modelRef}>
                <div className="modal-content">
                    <h4>{product.name}</h4>
                    <p>Are You Sure, You Want To Delete This?</p>
                </div>
                <div className="modal-footer">
                    <button className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">Cancel</button>
                    <button className="btn waves-effect waves-light #b71c1c red darken-4" type="submit" name="action" onClick={()=> deleteProduct()}>Yes</button>
                </div>
            </div>
        )
    }


    const deleteProduct = async () =>{
        const res = await fetch(`${baseUrl}api/product/${product._id}`,{
            method:"DELETE"
        })
        await res.json();
        router.push("/")
    }


    return (
        <>
            <Navbar />
            <div className="container center-align">
                <h3 style={{ fontSize: "32px", fontFamily: "inherit" }}>{product.name}</h3>
                <img src={product.mediaUrl} alt="" width="350px" />
                <h3 style={{ fontSize: "30px" }}>Rs  {product.price}</h3>
                <p className="left-align" style={{ fontWeight: "500" }}>{product.description}</p>
                <div className="input-field col s6">
                    <input style={{ width: "50%" }} placeholder="Enter Number of Item" id="numberOfItem" type="number" className="validate" />
                    <button className="btn waves-effect waves-light" type="submit" name="action">Add</button>
                </div>
                <button data-target="modal1" className="btn waves-effect waves-light #b71c1c red darken-4 modal-trigger" type="submit" name="action">Delete</button>
                {getModel()}
            </div>
        </>
    )
}


// export async function getServerSideProps({params:{id}}){
//     const res = await fetch(`${baseUrl}api/product/${id}`)
//     const data = await res.json();
//     return{
//         props:{
//             products :data 
//         }
//     }
// }


export async function getStaticProps({ params: { id } }) {
    const res = await fetch(`${baseUrl}api/product/${id}`)
    const data = await res.json();
    return {
        props: {
            product: data
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "63a9205590c6ad5bd55938ec" } }
        ],
        fallback: true,
    }
}

export default Product;