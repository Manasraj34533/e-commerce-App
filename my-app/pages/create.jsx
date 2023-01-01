import React, { useState } from 'react'
import Navbar from './components/Navbar'
import baseUrl from "./Models/BaseUrl"

function create() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) =>{
      e.preventDefault();
      const mediaUrl = await imageUpload();
      console.log(name,price,mediaUrl,description);
      const res = await fetch(`${baseUrl}api/products`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          price,
          mediaUrl,
          description
        })
      })

    const res2 = await res.json();
    if(res2.error){
      M.toast({html:res2.error,classes:"red"})
    }else{
      M.toast({html:"Product Saved",classes:"green"})
    }
  }

  const imageUpload = async () =>{
      const data = new FormData();
      data.append('file',mediaUrl)
      data.append("upload_preset","mystore")
      data.append("cloud_name","db312y1he")
      const res = await fetch("https://api.cloudinary.com/v1_1/db312y1he/image/upload",{
        method:"POST",
        body:data
      })
      const res2 = await res.json();
      return res2.url;
  }

  return (
    <div>
      <Navbar />
      <form className='container' onSubmit={(e)=>handleSubmit(e)}>
        <h4 className='center'>Upload Your Product</h4>
        <input type="text" placeholder='Enter Name' name='name' value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" placeholder='Enter Price' name='price' value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" accept='image/*' onChange={(e)=> setMediaUrl(e.target.files[0])}/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" placeholder="Upload file" />
          </div>
        </div>
        <img src={mediaUrl?URL.createObjectURL(mediaUrl):""} className='responsive-img' alt="" />
        <div class="input-field col s12">
            <textarea id="textarea2"  name="description" value={description} class="materialize-textarea" placeholder='Enter description' onChange={(e)=> setDescription(e.target.value)}/>
        </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
      </form>
    </div>
  )
}

export default create