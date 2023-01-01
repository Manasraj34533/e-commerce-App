import React from 'react';
import Navbar from './Navbar';
import Head from "next/head"

const Layout = ({children}) =>{
  return(
    <>
      <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      
      <Navbar/>
      {children}
    </>
  )
}

export default Layout