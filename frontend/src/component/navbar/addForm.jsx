import React from 'react'
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { XSquare } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddForm({func}) {
    console.log(func)
    // func(false)
    
    const navigateto = useNavigate();
    const[name,setName]=useState();
    const[description,setdescription]=useState();
    const[imageurl,setimageurl]=useState();
    const[feature,setFeature]=useState();
    const[price,setprice]=useState();
    const[otherDesc,setotherDesc]=useState();
  return (
    <div className='adddetials'>
    
    <input placeholder='Name' type='text' onChange={(e)=>{
        setName(e.target.value)
    }}></input>
    <input placeholder='price' onChange={(e)=>{
        setprice(e.target.value)
    }}></input>
    <input placeholder='description' onChange={(e)=>{
        setdescription(e.target.value)
    }}></input>
    <input placeholder="imageUrl" onChange={(e)=>{
        setimageurl(e.target.value)
    }} ></input>
    <input placeholder='feature' onChange={(e)=>{
        setFeature(e.target.value)
    }}></input>
    <input placeholder="other description" onChange={(e)=>{
        setotherDesc(e.target.value)
    }}></input>
    <div className='addEcom'>
    <button>Amazon</button>
    <button>Flipkart</button>
    <button>Other</button>
    </div>
    <button className='submit' onClick={async ()=>{
        const data = await axios.post("http://localhost:3000/addItem",{
            
                "name" :name ,
                "price":parseInt(price),
                "description":description,
                "imageUrl" : imageurl,
                "Feature":feature,
                "otherDesc":otherDesc
            
        }).then((d)=>{
            console.log(d);
            navigateto('/')
            alert("data added successfully ")
            
        }).catch((e)=>{
            console.log(e)
        })
    }}>Submit</button>
    </div>
  )
}
