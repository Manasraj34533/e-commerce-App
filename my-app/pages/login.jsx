import {React,useState} from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link';

function login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <>
      <Navbar/>
      <div className="container center-align card" style={{marginTop:"60px",marginRight:"auto",marginLeft:"auto",height:"400px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <h3 style={{fontSize:"40px",fontWeight:"500 "}}>Login</h3>
          <form action="">
            <input type="email" name="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button className="btn waves-effect waves-light left" type="submit" name="action" style={{marginTop:"10px"}}>Login</button>
            <Link href="/signup">Create New Account? sign up</Link>
          </form>
        </div>
    </>
  )
}

export default login