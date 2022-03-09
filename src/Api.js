import React,{useEffect, useState} from 'react'
import Cardan from './Cardan';
import {CardGroup} from 'react-bootstrap';
import Api1 from './api1';

function Api() {
    const [loading,setLoading]=useState(true)
    const [ds,setds]=useState([]);
    useEffect(() => {
        apia();
      
    }, [])
   
    const apia=async()=>{
        setLoading(true)
            const data= await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
            const dataset= await data.json();
            setds(dataset);
            setLoading(false);  
          
        }
if(loading)
{
    return<>
    <h1>loading......</h1>
    </>
}
return (
  
    <div className='row'>

   {ds.map((dsa)=>{
      
         return(<>
          <div className='col-lg-4 col-md-4 col-sm-12'>
         <Cardan key={dsa.id} {...dsa}/>
         </div>
   </>)})}
   </div>


)

   
 
}

export default Api