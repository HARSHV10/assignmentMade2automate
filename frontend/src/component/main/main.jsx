import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../card/card';
import './Main.css'

export default function Main() {
    const [pagination,setpagination]=useState(); 
    const [data,setdata]=useState([]); 
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.post("http://localhost:3000/getItem", {
                filter: {},
                pagination: 0
              }).then((d)=>{
                setdata(d.data);
                // console.log("data",data)
                console.log(data);
              });
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
        // return()=>{
        //     " "
        // }
    },[])

    console.log(data);
  return (
    <div className='Main'>
    {data?.map((i)=>{
        return(
            <Card key={i.productID} content={i}/>
        )
    })}
    </div>
  )
}
