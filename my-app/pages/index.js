import { Inter } from '@next/font/google'
import Navbar from "./components/Navbar"
import Link  from 'next/link'
import baseUrl from './Models/BaseUrl'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {

  const productList = products.map(product => {
    return (
            <div className="card" key={product._id} style={{width:"300px",margin:"20px"}}>
              <div className="card-image" style={{width:"300px"}}>
                <img src={product.mediaUrl}/>
                <span className="card-title">{product.name}</span>
              </div>
              <div className="card-content">
                <p>Rs{product.price}</p>
                <p>{product.description}</p>
              </div>
              <div className="card-action">
                  <Link href={'/product/[id]'} as={`/product/${product._id}`}>View Products</Link>
              </div>
            </div>
    )
  })
  return (
    <>
      <Navbar />
      <div className="rootcard" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {productList}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}api/products`);
  const data = await res.json();

  return {
    props: {
      products: data
    }
  }
}

// export async function getServerSideProps(){
//   const res = await fetch(`${baseUrl}api/products`);
//   const data = await res.json();

//   return {
//     props: {
//       products: data
//     }
//   }
// }
