import React from 'react'
import Link from "next/link"
import Head from "next/head"
import {useRouter} from "next/router"
function Navbar() {

  const router = useRouter();
  function isActive(route){
    if(route === router.pathname){
      return "active"
    }else{
      return ""
    }
  }

  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    </Head>

      <nav>
        <div className="nav-wrapper #00e676 green accent-3">
          <a href="#" className="brand-logo">E-Commerce Shop</a>
          <ul id="nav-mobile" className="right">
            <li className={isActive("/login")}><Link href="/login">Login</Link></li>
            <li className={isActive("/signup")}><Link href="/signup">Signup</Link></li>
            <li className={isActive("/create")}><Link href="/create">Create</Link></li>
          </ul>
        </div>
      </nav>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </>
  )
}

export default Navbar