import React, { useState } from 'react'
import './navbar.css'
import { Plus } from 'lucide-react';
import { XSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';


export default function Navbar() {
    const navigateto = useNavigate();
    const [display , setdisplay] = useState(false);
    const[name,setName]=useState();
    const[description,setdescription]=useState();
    const[imageurl,setimageurl]=useState();
    const[feature,setFeature]=useState();
    const[price,setprice]=useState();
    const[otherDesc,setotherDesc]=useState();
  return (
    <div className='navbar'>
   
    <img src='https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1'></img>
    <input placeholder='Search'></input>
    <Search color='blue' strokeWidth="3px" size="30px"/>
    <div className='additem' onClick={()=>{
        navigateto('/Additem')
    }}><Plus size='50' strokeWidth={4}/></div>


    </div>
  )
}
