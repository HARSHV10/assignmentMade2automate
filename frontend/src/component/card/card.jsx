import React, { useState } from 'react'
import './card.css'
import Barcode from 'react-barcode' 
import { ShoppingCart } from 'lucide-react';

export default function Card({content}) {
    const [barcode,setbarcode]=useState(false);
  return (
      <div className='card'>
      <div className='card_inner'>
    <h2>{content.name}</h2>
    <p>{content.description}</p>
    <div>Price:{content.price}</div>
    <list>
    Features :<br></br>
    {content.Feature}
    </list>
    <div className='barcode'>
    <Barcode value="inactive barcode" height='50' width='2' margin='30px'/>
    </div>
    <div>
    </div>
    <div className='Cardbutton'>
    <button>buy</button>
    <button> <ShoppingCart /></button>
    </div>
    </div>
    <img className='productImg' src={content.imageUrl}></img>
    </div>
  )
}
